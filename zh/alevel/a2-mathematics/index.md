---
title: A2 纯数学
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
lang: zh-CN
translation_of: /alevel/a2-mathematics/
permalink: /zh/alevel/a2-mathematics/
toc_headings: "#start-here, #algebra-and-functions, #trigonometry-exponentials-and-logarithms, #calculus, #numerical-methods-vectors-and-proof, #mixed-review, #later-review, #quick-reference"
study_page: true
reading_layout: true
---

这是 A2 普通数学的纯数学单元 MA03。每课先说明问题是什么意思，再看一个完整例子，最后自己试。遇到不熟悉的词或步骤，先沿回补链接补上，再回来继续。
{: .lesson-lead}

## 从这里开始 {#start-here}

第一次学，从[函数](/zh/alevel/a2-mathematics/functions/)开始，顺着下面的主题前进。你不必一开始就看懂目录里的所有术语，课文会逐步解释。如果看例题时有一步跟不上，先停下来，找这一页给出的回补链接。复习时先自己做题，做错后看解释，再收起答案做一道新的重试题。

- **学习：**按下方四组主题前进。
- **连接：**学过相关课程后，完成[综合任务](#mixed-review)。
- **稍后：**学过其他主题后，回来做[回顾任务](#later-review)。
{: .lesson-routes}

<span id="study-a-topic"></span>
<span id="partial-fractions"></span>
<span id="repeated-linear-factors"></span>
<span id="integration-using-partial-fractions"></span>
<span id="partial-fractions-practice"></span>

## 代数与函数 {#algebra-and-functions}

1. <span id="p21-algebra-and-functions"></span>**[函数](/zh/alevel/a2-mathematics/functions/)** — 看清允许输入哪些数、会输出哪些数，再学连续使用两个函数和把步骤倒过来。
2. **[模函数与变换](/zh/alevel/a2-mathematics/modulus-and-transformations/)** — 从“离零多远”理解绝对值，看图像怎样移动，再解方程。
3. **[代数分式与代数除法](/zh/alevel/a2-mathematics/algebraic-fractions-and-division/)** — 像计算普通分数一样处理含字母的分式，并弄懂多项式的除法和余数。
4. **[部分分式](/zh/alevel/a2-mathematics/partial-fractions/)** — 把复杂分式拆成几个简单分式，方便继续计算或积分。
5. <span id="p22-sequences-and-series"></span>**[二项式级数](/zh/alevel/a2-mathematics/binomial-series/)** — 把一个式子写成一串幂，弄清什么时候能用它估算。

## 三角函数、指数与对数 {#trigonometry-exponentials-and-logarithms}

先调用 AS 三角图像与指数法则；各页提供回补链接。

- <span id="p24-trigonometry"></span>**[三角函数与公式](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/)** — 说明两个三角表达式为什么相等，并找全指定范围内的角。
- <span id="p25-exponentials-and-logarithms"></span>**[指数函数与对数函数](/zh/alevel/a2-mathematics/exponential-and-logarithmic-functions/)** — 用对数找出未知指数，再解释公式中的数怎样影响增长或衰减。

## 微积分 {#calculus}

微分研究“变得多快”，积分把变化累积起来，也能倒过来找函数。先学求导，再学参数曲线和积分，最后用这些方法解微分方程。

1. <span id="p26-differentiation"></span>**[微分](/zh/alevel/a2-mathematics/differentiation/)** — 根据函数的样子选择求导方法，再用斜率研究曲线。
2. <span id="p23-coordinate-geometry"></span>**[参数方程](/zh/alevel/a2-mathematics/parametric-equations/)** — 用同一个数同时给出横、纵坐标，再把这两条规则连接成曲线。
3. <span id="p27-integration"></span>**[积分：方法选择](/zh/alevel/a2-mathematics/integration/)** — 从求导倒过来找函数，学习怎样选择积分方法和检查答案。
4. **[积分：三角积分与应用](/zh/alevel/a2-mathematics/integration-applications/)** — 先把三角表达式改成容易积分的样子，再用积分计算面积和旋转体体积。
5. <span id="p28-differential-equations"></span>**[微分方程](/zh/alevel/a2-mathematics/differential-equations/)** — 从“怎样变化”写出方程，再找出符合起始条件的函数。

## 数值方法、向量与证明 {#numerical-methods-vectors-and-proof}

- <span id="p29-numerical-methods"></span>**[数值方法](/zh/alevel/a2-mathematics/numerical-methods/)** — 通过重复计算找近似值，并说明它有多可靠。
- <span id="p210-vectors"></span>**[向量](/zh/alevel/a2-mathematics/vectors/)** — 用有方向的移动描述点和直线，计算交点、夹角和距离。
- **[数学证明](/zh/alevel/a2-mathematics/mathematical-proof/)** — 解释为什么一个结论总成立，或用一个反例说明它并不总成立。

## 连接所学 {#mixed-review}

以下自拟题混合旧知识，不在标题中指定方法。它们是教学检查，不是完整模拟卷，没有官方分值；请独立用英文说明条件与推理。用过提示应记为借助支持完成，稍后再收起提示重做。

<section class="lesson-check" markdown="1">

### 综合 A {#mixed-a}

**Question:** Let $f(x)=\dfrac{2x+1}{x-1}$ for $x>1$, and let $g(x)=\sqrt{x}$ for $x\ge0$. Find the range and inverse of $f$, stating the inverse domain. Find the domain of $g\circ f$ and solve $g(f(x))=2$. Give reasons for any rejected values.

<details markdown="1">
<summary>提示</summary>

先把 $f(x)$ 写成常数加一个分式。复合时检查内层输出是否属于外层定义域。

</details>

<details markdown="1">
<summary>解答、检查与回补</summary>

因为 $f(x)=2+\dfrac3{x-1}$ 且 $x>1$，值域为 $(2,\infty)$，区间内每个值都能取到。

$$y=\frac{2x+1}{x-1}\ \Longrightarrow\ (y-2)x=y+1
\ \Longrightarrow\ f^{-1}(x)=\frac{x+1}{x-2},\quad x>2.$$

反函数值域为 $(1,\infty)$。在原定义域内恒有 $f(x)>2>0$，所以复合函数定义域仍为 $x>1$。

$$g(f(x))=2\ \Longrightarrow\ \frac{2x+1}{x-1}=4
\ \Longrightarrow\ x=\boxed{\frac52}.$$

它属于定义域，代入得 $g(f(5/2))=\sqrt4=2$，没有其他候选值。若漏了反函数定义域，回看[定义域、值域与反函数](/zh/alevel/a2-mathematics/functions/#inverse-functions)；约分或移项不能消除原限制。

</details>

</section>

<section class="lesson-check" markdown="1">

### 综合 B {#mixed-b}

**Question:** A curve is given by $x=t^2,\ y=t^3-3t$ for $t>0$. Find its Cartesian equation with its domain. Find the tangent and normal at $t=1$. Find the total area between the curve and the horizontal axis for $1\le x\le3$.

<details markdown="1">
<summary>提示</summary>

消参时须选择允许的分支。在给定点先检查两个坐标的导数，再取比值。计算面积前先判断曲线正负。

</details>

<details markdown="1">
<summary>解答、检查与回补</summary>

由 $t>0$ 得 $t=\sqrt{x}$，所以 $x>0$，直角坐标方程为 $y=\sqrt{x}(x-3)$。在 $t=1$ 时点为 $(1,-2)$，且

$$\frac{dy}{dx}=\frac{3t^2-3}{2t}=0.$$

切线为 $y=-2$；法线是竖直线 $x=1$，不能把除以零写成一个有限斜率。

在 $1\le x\le3$ 上，曲线位于横轴下方或横轴上，所以

$$\begin{aligned}
A&=-\int_1^3\sqrt{x}(x-3)\,dx\\
&=\left[2x^{3/2}-\frac25x^{5/2}\right]_1^3
=\boxed{\frac{12\sqrt3-8}{5}}.
\end{aligned}$$

正结果与面积含义一致。若符号或法线出错，回补[面积](/zh/alevel/a2-mathematics/integration-applications/#area)或[参数求导](/zh/alevel/a2-mathematics/parametric-equations/#parametric-differentiation)。积分中正确改用参数同样成立。

</details>

</section>

<section class="lesson-check" markdown="1">

### 综合 C {#mixed-c}

**Question:** A quantity $y$ satisfies $\dfrac{dy}{dt}=k(10-y)$ for $t\ge0$, where $k>0$. Initially $y=2$, and $y=6$ when $t=\ln2$. Find $k$ and $y$ in terms of $t$. Explain the long-term behaviour and check the result in the differential equation.

<details markdown="1">
<summary>提示</summary>

确定积分常数时使用初始条件。除以某个因子之前，先检查它对应的平衡解。

</details>

<details markdown="1">
<summary>解答、检查与回补</summary>

平衡解为 $y=10$，但不满足 $y(0)=2$。在初值所在分支 $y<10$ 上分离变量：

$$\int\frac{dy}{10-y}=\int k\,dt,\qquad
-\ln(10-y)=kt+C.$$

代入 $y(0)=2$ 得 $10-y=8e^{-kt}$。再用第二组条件：

$$4=8e^{-k\ln2},\qquad e^{-k\ln2}=\frac12,\qquad k=1.$$

所以 $y=10-8e^{-t}$。其导数为 $8e^{-t}=10-y$，两组条件均成立。在所有 $t\ge0$ 上，它从 $2$ 开始递增，从下方趋近 $10$，但在有限时间内不会达到。若漏掉对数负号或平衡解，回补[分离变量](/zh/alevel/a2-mathematics/differential-equations/#separable-variables)，再做本章重试。

</details>

</section>


## 学过其他内容后再回顾 {#later-review}

完成其他主题后，不先打开旧答案，回来独立作答。记录首次作答、用过的帮助、错误与新的结果，并按反馈链接修复。这里不设统一等待天数或通过分数。

<section class="lesson-check" markdown="1">

### 回顾 A {#later-a}

**Question:** Use the first three terms of the expansion of $(1+x)^{-1}$ to estimate $\displaystyle\int_0^{1/2}\frac{1}{1+x}\,dx$. State the expansion validity interval. Then show algebraically whether your estimate is above or below the exact integral, and find the exact value.

<details markdown="1">
<summary>提示</summary>

无穷展开的有限几项不是精确恒等式。积分前先比较截断多项式与原有理函数。

</details>

<details markdown="1">
<summary>解答、检查与回补</summary>

展开的前三项为 $1-x+x^2$，有效范围为 $\lvert x\rvert<1$，整个积分区间都在其中。

$$I_{\mathrm{est}}=\int_0^{1/2}(1-x+x^2)\,dx
=\left[x-\frac{x^2}2+\frac{x^3}3\right]_0^{1/2}
=\boxed{\frac5{12}}.$$

判断误差方向时使用精确恒等式，而不是省略号：

$$\frac1{1+x}-(1-x+x^2)=-\frac{x^3}{1+x}<0
\quad(0<x\le1/2).$$

所以估计值严格大于精确积分。精确值为 $[\ln(1+x)]_0^{1/2}=\ln(3/2)$，与比较一致。若把截断展开当成精确式，回补[有效范围与近似](/zh/alevel/a2-mathematics/binomial-series/#the-binomial-series)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 回顾 B {#later-b}

**Question:** Two lines have equations $\mathbf r=(1,0,2)+\lambda(1,2,-1)$ and $\mathbf r=(0,1,1)+\mu(2,1,0)$. Determine whether they intersect and find the acute angle between them. Explain why solving only two coordinate equations is insufficient for the intersection claim.

<details markdown="1">
<summary>提示</summary>

两条线的参数独立。用相同参数值检查第三个坐标，再区分夹角所需的方向向量与位置向量。

</details>

<details markdown="1">
<summary>解答、检查与回补</summary>

由第三个坐标，$2-\lambda=1$，得 $\lambda=1$。第一个坐标再给出 $\mu=1$，第二个坐标确认 $2=1+1$，所以交点为 $(2,2,1)$。

锐角用方向向量计算：

$$\cos\theta=\frac{\lvert(1,2,-1)\cdot(2,1,0)\rvert}{\sqrt6\sqrt5}
=\frac4{\sqrt{30}},\qquad
\theta\approx43.1^\circ.$$

异面直线也可能从两个方程得到候选参数；第三个方程才确认三维空间中的同一点。若混淆参数或夹角向量，回补[直线相交](/zh/alevel/a2-mathematics/vectors/#pairs-of-lines)和[数量积](/zh/alevel/a2-mathematics/vectors/#scalar-product)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 回顾 C {#later-c}

**Question:** A student claims that $\dfrac{\sin2\theta}{1+\cos2\theta}=\tan\theta$ for every real $\theta$. Give the correct domain and prove the equality there. Then solve $\dfrac{\sin2\theta}{1+\cos2\theta}=\sqrt3$ for $0\le\theta<2\pi$, checking the original expression.

<details markdown="1">
<summary>提示</summary>

使用二倍角恒等式，但约分前保留必要条件。代入一个值成立，不能证明整个定义域的恒等式。

</details>

<details markdown="1">
<summary>解答、检查与回补</summary>

分母为 $1+\cos2\theta=2\cos^2\theta$，所以两边恰在 $\cos\theta\ne0$ 时有定义；排除 $\theta=\frac\pi2+n\pi$，$n\in\mathbb Z$。

$$\frac{\sin2\theta}{1+\cos2\theta}
=\frac{2\sin\theta\cos\theta}{2\cos^2\theta}
=\frac{\sin\theta}{\cos\theta}
=\tan\theta.$$

所述定义域内约分成立。在要求的区间中，$\tan\theta=\sqrt3$ 给出 $\theta=\frac\pi3,\frac{4\pi}3$。二者都未被排除；原式分子为 $\sqrt3/2$，分母为 $1/2$。只代入数值不能证明恒等式。若漏了定义域或论证，回补[恒等式与方程](/zh/alevel/a2-mathematics/trigonometric-functions-and-formulae/#trigonometric-identities)或[证明](/zh/alevel/a2-mathematics/mathematical-proof/#direct-proof)。

</details>

</section>

## 快速参考 {#quick-reference}

[公式与方法笔记](/zh/alevel/a2-mathematics/quick-reference/)用于学后查阅；需要解释与练习时回到对应课程。学完应能说明选择和条件，不能把打开全部答案当成完成学习。

<details markdown="1">
<summary>在教材或课程大纲中查找主题</summary>

P2 编号依据 [OxfordAQA 数学课程说明](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。下方链接会打开对应的参考笔记。页码指 *AQA A2 Mathematics: Pure and Mechanics* 的印刷页码。这些课程以 AS 纯数学知识为基础。

| 主题与参考笔记 | 教材章节或小节 |
|---|---|
| [P2.1：代数与函数](/zh/alevel/a2-mathematics/quick-reference/#p21-algebra-and-functions) | 第 1 章：函数，第 2–21 页 |
| [P2.2：二项式级数](/zh/alevel/a2-mathematics/quick-reference/#p22-sequences-and-series) | 第 2 章：二项式级数，第 24–30 页 |
| [P2.3：参数方程](/zh/alevel/a2-mathematics/quick-reference/#p23-coordinate-geometry) | 第 5.6–5.7 节：参数方程与求导，第 72–77 页 |
| [P2.4：三角函数与公式](/zh/alevel/a2-mathematics/quick-reference/#p24-trigonometry) | 第 3 章：三角函数与公式，第 32–49 页 |
| [P2.5：指数函数与对数函数](/zh/alevel/a2-mathematics/quick-reference/#p25-exponentials-and-logarithms) | 第 4 章：指数函数与对数函数，第 50–57 页 |
| [P2.6：微分](/zh/alevel/a2-mathematics/quick-reference/#p26-differentiation) | 第 5 章：微分，第 58–80 页 |
| [P2.7：积分](/zh/alevel/a2-mathematics/quick-reference/#p27-integration) | 第 6 章：积分，第 82–102 页 |
| [P2.8：微分方程](/zh/alevel/a2-mathematics/quick-reference/#p28-differential-equations) | 第 7 章：微分方程，第 104–112 页 |
| [P2.9：数值方法](/zh/alevel/a2-mathematics/quick-reference/#p29-numerical-methods) | 第 8 章：数值方法，第 114–123 页 |
| [P2.10：向量](/zh/alevel/a2-mathematics/quick-reference/#p210-vectors) | 第 9 章：向量，第 124–147 页 |
| [数学论证](/zh/alevel/a2-mathematics/quick-reference/#proof-by-contradiction) | 课程大纲补充内容；教材中没有单独章节 |

数学证明是课程大纲补充内容，在所提供的教材中没有单独章节。

</details>

本路线覆盖 9660 MA03 的 P2 主题及数学论证，不迁移到修订后的 9760 资格。课程与检查支持学习，不等同于官方完整真题集。

A2 数学的其他单元：[力学（MA05）](/zh/alevel/a2-mathematics/mechanics/) · [统计学（MA04，英文）](/alevel/a2-mathematics/statistics/)。
