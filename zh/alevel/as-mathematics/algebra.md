---
layout: subjects
title: "代数"
mathjax: true
grade: as
subject: as-mathematics
lang: zh-CN
translation_of: /alevel/as-mathematics/algebra/
permalink: /zh/alevel/as-mathematics/algebra/
toc_headings: "#l01, #l01-indices, #l01-surds, #l01-independent-start, #l01-diagnosis, #l02, #l03, #l05, #l01-later, #next-step, #sources"
reading_layout: true
study_page: true
---

[AS 数学学习路线](/zh/alevel/as-mathematics/#learning-route)
{:.lesson-meta}

从精确形式开始，再把它用于二次式、多项式和图像变换。先用纸笔尝试，再打开帮助。所有题目均为**自拟题**，没有官方分值；[范围与来源](#sources)在页末可查。

- [等价形式与精确值](#l01)
- [二次式、根与不等式](#l02)
- [多项式的因式与草图](#l03)
- [平移与伸缩图像](#l05)

## 等价形式与精确值 {#l01}

这一节先学两件事：看懂分数指数，以及把根式改写成更容易计算的样子。“等价形式”就是**写法不同，值没有变**；“精确值”就是保留分数或根式，不把它换成四舍五入的小数。

学完后，你会用这些写法比较大小、求未知数，并解释每一步。先修：分数、整数指数与展开。需要时看下面的短回补。

<details id="l01-prerequisite" markdown="1">
<summary>回补：整数幂与分数</summary>

对于正数 $a$，$a^3a^2=a^5$，因为共有五个因子 $a$。相除时约去相同因子：$a^5/a^2=a^3$。又因为 $a^2/a^2=1=a^0$，小次幂除以大次幂会留下倒数：$a^2/a^3=1/a=a^{-1}$。

分数相减先通分：$1/2-2=1/2-4/2=-3/2$。展开得到 $(u+v)(u-v)=u^2-v^2$，因为中间两项抵消。下面会分别用到这三个想法。

</details>

### 分数指数为什么表示根？ {#l01-indices}

先想一个熟悉的问题：哪个正数乘自己得到 9？答案是 3。这就是开平方。$9^{1/2}=\sqrt9=3$，两种写法表示同一件事。

指数是分数时，先看分母：分母是 2，就开平方；分母是 3，就开立方。例如 $\sqrt[3]8=2$，因为 $2\times2\times2=8$。

再看分子：它告诉我们，开完根以后还要乘方几次。下面把这个意思写成通用公式。这里 $a>0$，$p,q$ 是正整数；先看例子，再回头认公式也可以：

$$\begin{aligned}
a^{1/q}&=\sqrt[q]{a},\\
a^{p/q}&=(\sqrt[q]{a})^p,\\
a^{-p/q}&=\frac1{a^{p/q}}\quad(p>0).
\end{aligned}$$

例如下面的 $2/3$：先按分母 3 开立方，得到 2；再按分子 2 平方，得到 4。指数前面有负号时，最后取倒数：

$$8^{2/3}=(\sqrt[3]{8})^2=2^2=4,\qquad
8^{-2/3}=\frac14.$$

接下来要把几个幂合成一个。先分清自己在做什么：**相乘就加指数，相除就减指数；一个幂再乘方，就乘指数。** 三条公式如下，其中底数 $a>0$，指数 $m,n$ 可以是整数或分数：

$$a^ma^n=a^{m+n},\qquad
\frac{a^m}{a^n}=a^{m-n},\qquad
(a^m)^n=a^{mn}.$$

本节题目都给出正底数，这样开根和除法都有意义。先在这个范围内练熟；负底数要另外判断，不能直接套用这里所有的写法。

<div class="worked-example" markdown="1">

### 完整示范：先换形式，再求值 {#l01-indices-example}

**Question:** For $a>0$, write $\sqrt[3]{a^2}/a$ as a single power of $a$, then find its exact value when $a=8$.

先认清这道题的三步。第一步，把分子的立方根写成分数指数；第二步，分母的 $a$ 就是 $a^1$，相除时减指数；第三步，负指数改写成倒数：

$$\frac{\sqrt[3]{a^2}}a
=\frac{a^{2/3}}{a^1}
=a^{2/3-1}
=a^{-1/3}
=\frac1{\sqrt[3]a}.$$

当 $a=8$ 时，值为 $1/2$。代回原式检查：$\sqrt[3]{64}/8=4/8=1/2$。负指数给出的是正的倒数，与解释一致。

</div>

<div class="lesson-check" markdown="1">

### 试一试：连接根式与幂 {#l01-scaffold}

**Question:** For $x>0$, rewrite $\sqrt{x}/x^2$ as one power, then evaluate it at $x=4$.

<details markdown="1">
<summary>提示</summary>

先把分子写成二分之一次幂，再减指数。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$$\frac{\sqrt{x}}{x^2}=x^{1/2-2}=x^{-3/2},\qquad
4^{-3/2}=\frac1{(\sqrt4)^3}=\frac18.$$

原式给出 $\sqrt4/4^2=2/16=1/8$。完整解释应连接根式、指数相减和取倒数；只写最终数值还不能显示这条推理。

</details>

</div>

### 让精确值便于使用 {#l01-surds}

像 $\sqrt2$ 这样的根式（surd），不能写成有限小数；保留根号就能保留它的精确值。

怎样把根式变简单？先在根号里面找一个能开出整数的因子。例如 25 能开出 5，所以把 50 写成 25 乘 2，就能把 5 移到根号外面。这里用到：当 $u,v$ 非负时，$\sqrt{uv}=\sqrt u\sqrt v$。

注意，这个拆法只适用于乘积，不能照搬给加法：$\sqrt{1+1}=\sqrt2$，而 $\sqrt1+\sqrt1=2$。

符号 $\sqrt u$ 表示**非负**平方根。例如 $\sqrt9=3$；方程 $z^2=9$ 才有 $z=3$ 和 $z=-3$ 两个解。

另一种常见任务叫“分母有理化”：把分母中的根号消掉，值仍然不变。

如果分母有两项，可以试着只把两项中间的加减号反过来。这样的搭档叫**共轭式**。为什么这样选？因为 $(u+v)(u-v)=u^2-v^2$，乘开后中间两项正好抵消。

记住分子也要乘同一个非零量。只改分母，整个分数的值就变了。下面看完整过程。

<div class="worked-example" markdown="1">

### 完整示范：看出同类项，得到有理分母 {#l01-worked}

**Question:** Simplify $\sqrt{50}-\sqrt8$ and rationalise $3/(\sqrt5+\sqrt2)$.

先做减法：50 里面有平方数 25，8 里面有平方数 4。拆开后，两项都带着同一个根号，就像 5 个同样的东西减去 2 个，剩下 3 个：

$$\begin{aligned}
\sqrt{50}-\sqrt8
&=\sqrt{25\cdot2}-\sqrt{4\cdot2}\\
&=5\sqrt2-2\sqrt2\\
&=3\sqrt2.
\end{aligned}$$

再看分式。分母是加号，就试着乘减号的搭档 $\sqrt5-\sqrt2$。它不等于零，因为 $\sqrt5>\sqrt2$。分子、分母一起乘它，分母便从根式变成 $5-2$：

$$\begin{aligned}
\frac3{\sqrt5+\sqrt2}
&=\frac{3(\sqrt5-\sqrt2)}{(\sqrt5+\sqrt2)(\sqrt5-\sqrt2)}\\
&=\frac{3(\sqrt5-\sqrt2)}{5-2}\\
&=\sqrt5-\sqrt2.
\end{aligned}$$

反向检查：$(\sqrt5-\sqrt2)(\sqrt5+\sqrt2)=5-2=3$，正好得到原分子。

</div>

### 独立完成 {#l01-independent-start}

收起示范，先做完两题，再打开帮助。若使用了提示，请记下来，以区分独立完成和借助支架完成。

<div class="lesson-check" markdown="1">

#### 任务 A {#l01-independent-indices}

**Question:** For $x>0$, let $F(x)=x^{5/6}/\sqrt[3]{x^2}$. Find a constant $k$ such that $F(x)=x^k$ for every allowed $x$. Then find $x$ when $F(x)=2$, explaining why your value works.

<details markdown="1">
<summary>提示</summary>

把分母写成与分子同底数的幂。确定指数后，再做对应开根运算的逆运算。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$$F(x)=\frac{x^{5/6}}{x^{2/3}}=x^{5/6-4/6}=x^{1/6}.$$

所以 $k=1/6$。由 $x^{1/6}=2$ 得 $x=2^6=64$。每个正数 $x$ 只有一个正六次根；两边均为正数，取六次幂是可逆操作。

代回原式：$64^{5/6}/\sqrt[3]{64^2}=32/16=2$。核对三点：根式转指数是否正确，通分后是否正确相减，以及正数解是否有依据。

</details>

</div>

<div class="lesson-check" markdown="1">

#### 任务 B {#l01-independent}

**Question:** Without decimal approximations, decide which is larger: $1/(\sqrt{12}-2)$ or $(\sqrt3+1)/3$. Justify your answer.

<details markdown="1">
<summary>提示</summary>

把两个量改写成便于直接比较的精确形式。

</details>

<details markdown="1">
<summary>解答与核验</summary>

先提取完全平方因子：$\sqrt{12}=2\sqrt3$。分母 $2(\sqrt3-1)$ 为正数且非零。再有理化：

$$\begin{aligned}
\frac1{\sqrt{12}-2}
&=\frac1{2(\sqrt3-1)}\\
&=\frac{\sqrt3+1}{2(3-1)}
=\frac{\sqrt3+1}{4}.
\end{aligned}$$

两者现在有相同的正分子。由 $1/3>1/4$ 可知第二式较大。第二式减第一式为 $(\sqrt3+1)/12>0$，也能精确检查大小。比较时须判断共同分子的符号，不能只背“分母小就大”。

</details>

</div>

### 修复原因，再做新题 {#l01-diagnosis}

- 若根式或负指数的含义弄错，回看[分数指数](#l01-indices)，再做[重试 A](#l01-retry-indices)。
- 若相除时把指数相乘，对照三条法则与[完整指数示范](#l01-indices-example)。先说清当前是什么运算，再做重试 A。
- 若把和的平方根拆开，或共轭式使分式变值，回看[主根与共轭式解释](#l01-surds)和[完整示范](#l01-worked)，再做[重试 B](#l01-retry)。

重试时收起旧答案。用解答找到错误发生在哪一步，而不只是替换最后的数值。

<div class="lesson-check" markdown="1">

#### 重试 A {#l01-retry-indices}

**Question:** For $t>0$, simplify $\sqrt[4]{t^3}/t^{5/4}$ to one power. Find $t$ when the original expression equals $1/3$, and check your answer in that original expression.

<details markdown="1">
<summary>提示</summary>

先把根式转成幂。负指数表示对应的根式位于分母。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$$\frac{\sqrt[4]{t^3}}{t^{5/4}}
=t^{3/4-5/4}=t^{-1/2}=\frac1{\sqrt t}.$$

由于 $t>0$，对 $1/\sqrt t=1/3$ 两边取倒数得 $\sqrt t=3$，所以 $t=9$。代回原式，四次根为 $9^{3/4}$，比值为 $9^{3/4}/9^{5/4}=1/3$。取正根的条件保证没有引入负数候选解。

</details>

</div>

<div class="lesson-check" markdown="1">

#### 重试 B {#l01-retry}

**Question:** A student claims that $\sqrt{7+3}=\sqrt7+\sqrt3$. Decide whether this is correct, giving an exact reason. Then find an exact simplified form of $2/(\sqrt{28}-\sqrt{12})$ and check it by multiplication.

<details markdown="1">
<summary>提示</summary>

先比较所声称的两个值的平方。对分式，先提取完全平方因子，再选择共轭式。

</details>

<details markdown="1">
<summary>解答与核验</summary>

先比较平方：

$$(\sqrt7+\sqrt3)^2=10+2\sqrt{21}>10=(\sqrt{7+3})^2.$$

所声称等式的两边都为正数，平方不等就表示原数不等，因此这条法则不成立。再处理分式：

$$\begin{aligned}
\frac2{\sqrt{28}-\sqrt{12}}
&=\frac2{2\sqrt7-2\sqrt3}\\
&=\frac1{\sqrt7-\sqrt3}\\
&=\frac{\sqrt7+\sqrt3}{7-3}
=\frac{\sqrt7+\sqrt3}{4}.
\end{aligned}$$

共轭式非零，乘回原分母得 $(\sqrt7+\sqrt3)(2\sqrt7-2\sqrt3)/4=(7-3)/2=2$，与原分子一致。

</details>

</div>

[继续学习二次式](#l02)。完成后，收起本段答案，返回[混合回顾题](#l01-later)。

## 二次式、根与不等式 {#l02}

目标：解二次方程，并解释图像与不等式。先修：[精确形式](#l01)与一次方程。

### 同一个二次式，不同写法回答不同问题 {#l02-concept}

二次式含有平方项。写成乘积，容易看出什么时候等于零；写成“一个平方加上常数”，容易看出最小或最大值。例如：

$$x^2-2x-3=(x-3)(x+1)=(x-1)^2-4.$$

中间的乘积在 $x=3,-1$ 时等于零。最后的平方不可能为负，所以最低点是 $(1,-4)$，对称轴是 $x=1$。

对 $ax^2+bx+c=0$，其中 $a\ne0$，求根公式是：

$$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.$$

根号里面叫判别式（discriminant）：正数给两个实根，零给一个重根，负数没有实根。容易拆成乘积时用因式分解；要找顶点时用配方；不方便时可以用求根公式。

不等式问的是一整段取值，不能只写两个根。把根标在数轴上，在各段试一个数；只有允许等号时才包含根。一次不等式除以负数要反向：$-2x<6$ 得 $x>-3$。两图像相交时，同一个输入得到相同输出；先令两个式子相等，再求两个坐标。

![向上抛物线 y=x²−2x−3 在 −1、3 穿横轴，顶点为 (1,−4)。下方符号带标出两根外为正、根处为零、根间为负。](/alevel/as-mathematics/assets/quadratic-sign.svg)

<div class="worked-example" markdown="1">

### 完整示范 {#l02-worked}

**Question:** Solve $x^2-2x-3\le0$. Find the intersections of $y=x^2$ and $y=2x+3$.

先找这个式子什么时候等于零。要找两个数，乘积为 −3、和为 −2，得到 $x^2-2x-3=(x-3)(x+1)$，根为 $-1,3$。在两根之间试 $x=0$，结果为 −3，所以这里是式子不大于零的一段。题目允许等号，端点也要保留：$-1\le x\le3$。

在交点，两条图像的 y 值相同。令 $x^2=2x+3$，会得到同一个二次式，这次要求它等于零。x 值为 −1 和 3，分别代回 $y=x^2$，得到交点 $(-1,1)$、$(3,9)$。

还可以用图像核对：$x^2-2x-3=(x-1)^2-4$ 的最低点为 $(1,-4)$。开口向上的图像在两根之间低于横轴，与不等式答案一致。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l02-scaffold}

**Question:** Complete the square for $x^2+4x+7$ and state its minimum.

<details markdown="1">
<summary>提示</summary>

一次项系数的一半平方后，补上也减去。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$(x+2)^2+3$，所以最小值为 $3$，在 $x=-2$ 时取得。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l02-independent}

**Question:** The line $y=4x+k$ touches $y=x^2$. Find $k$ and the point of contact. Then solve $x^2<4x+k+1$.

<details markdown="1">
<summary>提示</summary>

相切意味着联立所得方程有重根，再把参数代回不等式。

</details>

<details markdown="1">
<summary>解答与核验</summary>

联立式为 $x^2-4x-k=0$。由判别式 $16+4k=0$ 得 $k=-4$，切点为 $(2,4)$。不等式变成 $(x-2)^2<1$，因此 $1<x<3$。

</details>

</div>

### 诊断与修正 {#l02-diagnosis}

两个根只是边界，不是不等式的完整解。应测试根间与根外的值；判别式为零说明重根的前提是方程确为二次。

如果区间符号选错，回看[二次式解释](#l02-concept)，关掉以后做[新的不等式](#l02-retry)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l02-retry}

**Question:** Solve $-x^2+5x-6>0$ and $5-3x\ge11$.

<details markdown="1">
<summary>提示</summary>

先看抛物线开口，再注意一次不等式所除数的符号。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$-(x-2)(x-3)>0$ 得 $2<x<3$。一次不等式得 $-3x\ge6$，故 $x\le-2$。

</details>

[学完二次式：先做混合回顾](#l01-later)，再[继续学习多项式](#l03)。

</div>

## 多项式的因式与草图 {#l03}

目标：做多项式除法、找因式，并解释三次图像。先修：[二次式](#l02)。

### 除法告诉我们还剩多少 {#l03-concept}

整数除法有商，有时还有余数。多项式除法也是这个意思：

$$f(x)=(x-a)q(x)+r.$$

这里 $q(x)$ 是商，常数 $r$ 是余数。代入 $x=a$，整个乘积变成零，只剩 $r=f(a)$。如果这个值也是零，就说明整除，所以 $x-a$ 是因式。这就是余数定理与因式定理的来由。

怎样选商的下一项？让它乘回除式后，能消掉目前最高次的那一项。乘回、相减，再继续；余式次数低于除式时停止。这里处理二次或三次式除以整数一次因式。

因式也能帮助画图。一次因式经过根时变号，图像穿过横轴；平方因式不变号，图像接触横轴后折回。判别式为负的二次因式没有实根。三次式的最高次项决定两端方向，代入零得到纵轴交点。

![三次曲线 (x−1)²(x+2) 在单根 −2 穿轴，在二重根 1 切轴，并经过 (0,2)；左端向下、右端向上。](/alevel/as-mathematics/assets/cubic-roots.svg)

<div class="worked-example" markdown="1">

### 完整示范 {#l03-worked}

**Question:** Factorise $f(x)=x^3-3x+2$ and describe its real intercepts and end behaviour.

先试 $x=1$：$f(1)=1-3+2=0$，所以 $x-1$ 是因式。剩下的因式要用除法找。把缺少的平方项也写出来，即用 $x^3+0x^2-3x+2$ 除以 $x-1$。每一步选一个商项，消去当前最高次项：

$$\begin{aligned}
(x^3+0x^2-3x+2)-x^2(x-1)&=x^2-3x+2,\\
(x^2-3x+2)-x(x-1)&=-2x+2,\\
(-2x+2)-(-2)(x-1)&=0.
\end{aligned}$$

三次选出的商项是 $x^2$、$x$、$-2$。所以商为 $x^2+x-2=(x-1)(x+2)$，余数为零，得到 $f(x)=(x-1)^2(x+2)$。把这些因式乘回去，会得到原三次式。

在 $x=-2$ 两侧，因子 $x+2$ 变号，因此图像在 $(-2,0)$ 穿过横轴。在 $x=1$ 附近，平方不为负，$x+2$ 也为正，因此图像在 $(1,0)$ 接触横轴后仍在同一侧。另外 $f(0)=2$。最高次项是正的三次项，所以左端向下、右端向上。这些信息支持草图；计算器窗口本身不能证明所有根都找到了。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l03-scaffold}

**Question:** Divide $x^3+2x^2+x+5$ by $x+2$. State the quotient and remainder.

<details markdown="1">
<summary>提示</summary>

除式的零点是 −2。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$x^3+2x^2+x+5=(x+2)(x^2+1)+3$。商为 $x^2+1$，余式为 $3=f(-2)$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l03-independent}

**Question:** The remainder when $x^3+kx+2$ is divided by $x+1$ is zero. Find $k$, factorise the cubic over the reals, and justify the number of real roots.

<details markdown="1">
<summary>提示</summary>

先把余式条件变为参数方程，再讨论图像。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$-1-k+2=0$ 得 $k=1$。因式分解为 $(x+1)(x^2-x+2)$，二次因子的判别式 $1-8=-7<0$，故只有实根 $x=-1$，纵轴截点为 $(0,2)$。

</details>

</div>

### 诊断与修正 {#l03-diagnosis}

除式为 $x+a$ 时应代入 $-a$，不是 $a$。穿轴或切轴由重数决定，不能只数不同根。

若漏掉商项，回看[完整除法](#l03-worked)，再做[新除法题](#l03-retry-division)。若错在余数的代入符号或图像穿过／接触，做[展开与图像重试](#l03-retry)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l03-retry}

**Question:** Expand $(x-2)^2(x+1)$. State the remainder on division by $x-1$ and say which root is a touching point.

<details markdown="1">
<summary>提示</summary>

余式代入 1 即可。

</details>

<details markdown="1">
<summary>解答与核验</summary>

展开得 $x^3-3x^2+4$，余式为 $2$；二重根 $x=2$ 对应切轴点。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再试一题 {#l03-retry-division}

**Question:** Divide $x^3-2x^2-5x+6$ by $x+2$, showing the successive subtractions. State the quotient and remainder, and check by multiplying back.

<details markdown="1">
<summary>提示</summary>

每次选一个商项，先消去余式中次数最高的那一项。

</details>

<details markdown="1">
<summary>解答与检查</summary>

第一项选 $x^2$，乘回除式并相减。接着对新的余式做同样的事：

$$\begin{aligned}
(x^3-2x^2-5x+6)-(x^3+2x^2)&=-4x^2-5x+6,\\
(-4x^2-5x+6)-(-4x^2-8x)&=3x+6,\\
(3x+6)-(3x+6)&=0.
\end{aligned}$$

三次选出的商项是 $x^2,-4x,3$。所以商为 $x^2-4x+3$，余数为 0。乘回检查：$(x+2)(x^2-4x+3)=x^3-2x^2-5x+6$，正好得到原多项式。

</details>

</div>

## 平移与伸缩图像 {#l05}

目标：把图像公式的变化和点的移动联系起来。先修：[二次图像](#l02)与[多项式图像](#l03)。

### 追踪原来的输入与输出 {#l05-concept}

$q=f(p)$ 只是说：输入 $p$，规则给出 $q$。要找点移到哪里，先问新输入是多少，才能仍然用到这个原来的值。

运算在规则外面，就改变输出：在 $y=af(x)$ 上，$(p,q)$ 变成 $(p,aq)$；在 $y=f(x)+a$ 上，变成 $(p,q+a)$。

运算在规则里面，就改变输入。对 $y=f(x+a)$，需要 $x+a=p$，所以点变成 $(p-a,q)$。对 $y=f(ax)$，需要 $ax=p$；当 $a\ne0$ 时，得到 $(p/a,q)$。这就是为什么横向伸缩系数是括号内系数的倒数。

外面的负乘数让图像关于横轴反射；里面的负乘数让它关于纵轴反射。按 $(h,k)$ 平移时，每个点都移动同样距离，方程为 $y=f(x-h)+k$。先用点核对，再说反射、平移或伸缩；多种类型的组合描述只是补充教学，不增加 P1 必考要求。

![实线为 y=f(x)=x²，虚线为 y=f(2x)=4x²。点 (1,1) 移到 (1/2,1)，显示横向伸缩因子 1/2。](/alevel/as-mathematics/assets/point-stretch.svg)

<div class="worked-example" markdown="1">

### 完整示范 {#l05-worked}

**Question:** The graph $y=f(x)$ contains $(2,3)$. Locate its corresponding point on $y=f(2x)$ and on $y=-2f(x)$, describing each transformation.

已知点告诉我们 $f(2)=3$。对 $y=f(2x)$，真正送进 f 的输入仍要等于 2，所以先解 $2x=2$，得 $x=1$。输出仍是 3，新点为 $(1,3)$。所有横向距离缩为一半，即水平方向伸缩，比例因子为 $1/2$。

对 $y=-2f(x)$，输入仍是 $x=2$，但原来的输出 3 要乘 −2，所以点变为 $(2,-6)$：竖直距离变为两倍，并关于 x 轴反射。分别代回新式子，就能核对改变的是输入还是输出。

</div>

<div class="lesson-check" markdown="1">

### 带支架尝试 {#l05-scaffold}

**Question:** Translate $y=x^2$ by vector $(3,-2)$. State the new equation and vertex.

<details markdown="1">
<summary>提示</summary>

减去横向位移，恢复原来的输入。

</details>

<details markdown="1">
<summary>解答与核验</summary>

$y=(x-3)^2-2$，顶点为 $(3,-2)$。

</details>

</div>

<div class="lesson-check" markdown="1">

### 独立任务 {#l05-independent}

**Question:** A horizontal stretch maps $(2,5)$ on $y=f(x)$ to $(6,5)$. Write the transformed equation using $f$ and determine where $( -1,4)$ moves.

<details markdown="1">
<summary>提示</summary>

先看坐标放大几倍，再取倒数放入函数输入。

</details>

<details markdown="1">
<summary>解答与核验</summary>

横向伸缩因子为 $3$，因此新式为 $y=f(x/3)$，另一点变为 $(-3,4)$。

</details>

</div>

### 诊断与修正 {#l05-diagnosis}

式内因子改变的是“得到原输出所需的输入”，并非直接乘图上的横坐标。用非零关键点检查；因子为零时得到的是有定义处的常值图像，不称为伸缩。

如果把括号内外弄反，按[示范追踪同一个输入和输出](#l05-worked)，再做[新点的题目](#l05-retry)。

<div class="lesson-check" markdown="1">

### 再尝试 {#l05-retry}

**Question:** Describe $y=f(x+4)$ and give the image of $(1,-2)$.

<details markdown="1">
<summary>提示</summary>

新横坐标须使括号内等于 1。

</details>

<details markdown="1">
<summary>解答与核验</summary>

平移向量为 $(-4,0)$，点变为 $(-3,-2)$。

</details>

</div>

## 学完二次式，再回来试 {#l01-later}

完成二次式后，收起前面的解答，在这里连接两段知识。如果首次用了帮助，学完图像变换后再回来尝试一次。

<div class="lesson-check" markdown="1">

### 回顾任务 {#l01-later-task}

**Question:** Solve $x/\sqrt{x}=x-2$ over the real numbers. State the conditions on $x$ and explain why every retained answer satisfies the original equation.

<details markdown="1">
<summary>提示</summary>

平方根位于分母。先判断哪些值可以出现，再选一种方式把方程转为熟悉的形式。

</details>

<details markdown="1">
<summary>解答与核验</summary>

分母要求 $x>0$，所以 $x/\sqrt{x}=\sqrt{x}$，原方程化为 $\sqrt{x}=x-2$。左边为正数，因此任何解还须满足 $x>2$。

平方得到 $x=(x-2)^2$，即 $x^2-5x+4=(x-1)(x-4)=0$。候选值为 $x=1$ 和 $x=4$。舍去 $x=1$：它不满足 $x>2$，代入原方程还会得到 $1=-1$。当 $x=4$，原方程两边分别为 $4/\sqrt4=2$ 和 $4-2=2$，所以唯一的解是 $x=4$。

也可以令 $u=\sqrt{x}>0$，则 $u=u^2-2$，所以 $(u-2)(u+1)=0$。保留 $u=2$，舍去 $u=-1$，因为 $u>0$，同样得到 $x=4$。

若平方产生了错误候选解，回看[主平方根](#l01-surds)；若二次方程这一步有困难，回看[二次式示范](#l02-worked)。本题只列候选值、没有检查原方程，还不算完整。

</details>

</div>

[继续学习多项式](#l03)；完成图像变换后，[继续学习坐标几何](/zh/alevel/as-mathematics/coordinate-geometry/)。以后做[求导尝试](/zh/alevel/as-mathematics/differentiation/#l06-scaffold)时，还会在新运算中调用指数改写。

## 学完之后 {#next-step}

收起解答，检查自己能否独立完成本课各组的再尝试，并解释方法与适用条件。仍有困难时回看对应示范；完成后继续下一课。

[课程目录](/zh/alevel/as-mathematics/#learning-route) · [下一课：坐标几何](/zh/alevel/as-mathematics/coordinate-geometry/)

学完这条路线后，做[综合题](/zh/alevel/as-mathematics/#mixed-foundations)。在之后一次学习中，关掉解答完成[回顾题](/zh/alevel/as-mathematics/#later-foundations)。

## 来源与范围 {#sources}

<details class="lesson-notes" markdown="1">
<summary>查看范围与评分材料</summary>

按[当前 9660 官方大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)组织。配套评分材料用于核对作答证据；本页题目全部另行自拟，不能称为官方原题或官方评分标准。

OxfordAQA 9660 v5.2，§3.1 P1.1。精确形式部分实际参照 MA01 January 2025 Q1(a)(b) 及配套评分标准（QP 第 2–3 页；MS 第 4–5 页），保留指数改写与所用法则的证据；不把它的分值移植到自拟题。其余活动保留原 Q6／Q9 来源记录。

[MA01 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 2025 年 1 月原卷](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [配套 MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

完成标准是能独立解释方法与检查条件，不是看完解答。未经过学生试用，不据此宣称学习效果已验证。

</details>
