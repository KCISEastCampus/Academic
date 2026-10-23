---
title: "复数、Argand 图与二次根"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/complex-numbers-and-roots/
permalink: /zh/alevel/as-further-mathematics/complex-numbers-and-roots/
toc_headings: "#start, #model, #conjugate, #geometry, #loci, #roots, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

一个数，怎样既参与运算，又表示平面上的位置？从一个没有实数解的方程出发，我们逐步把代数运算与距离、方向联系起来。

按顺序学习[复数运算](#model)、[几何表示](#geometry)、[二次根的变换](#roots)。准备好后，收起讲解完成[独立检查](#practice)。学完应能解复数方程、解释轨迹，并在不求出原根的情况下构造新方程。

## 开始前 {#start}

需要的已有知识是展开括号、二次方程、勾股定理和弧度。先用实数知识完成下面三件小事。

<section class="lesson-check" markdown="1">

### 先修自检

**Entry check (self-written):** Expand $(t-1)^2$. Find the distance of $(-1,1)$ from the origin and its anticlockwise angle from the positive horizontal axis. Explain why $t^2=-4$ has no real solution.

<details markdown="1"><summary>核对与回补</summary>

$(t-1)^2=t^2-2t+1$：中间项来自两次交叉相乘。距离为 $\sqrt{(-1)^2+1^2}=\sqrt2$。参考角是 $\pi/4$，但点在第二象限，因此方向角为 $3\pi/4$。任何实数的平方都非负，所以没有实数的平方等于 $-4$。

如果漏了步骤，先画出直角三角形，或把两个括号逐项相乘。再检查一次：展开 $(t+2)^2$，并在 $-\pi$ 到 $\pi$ 之间选角表示 $(-1,-1)$ 的方向。

</details>

<details markdown="1"><summary>回补后的核对</summary>

$(t+2)^2=t^2+4t+4$；$(-1,-1)$ 的方向角是 $-3\pi/4$。负角表示顺时针转动。

</details>

</section>

## 1. 复数与运算 {#model}

引入一个满足 $i^2=-1$ 的数 $i$。这样 $(2i)^2=4i^2=-4$，而 $(-2i)^2=-4$ 也成立。刚才没有实数解的方程，现在有了两个复数解。

把复数写成 $z=x+iy$，其中 $x,y$ 都是实数。实部是 $\Re z=x$，虚部是 $\Im z=y$：虚部是系数，不是整个含虚数单位的项。例如 $3-2i$ 的虚部是 $-2$。

加减时分别处理实部与虚部。乘法先逐项展开，再把 $i^2$ 换成 $-1$。

$$\begin{aligned}
(3+2i)+(1-i)&=4+i,\\
(3+2i)-(1-i)&=2+3i,\\
(3+2i)(1-i)&=3-3i+2i-2i^2\\
&=5-i.
\end{aligned}$$

### 为什么要用共轭？ {#conjugate}

共轭复数 $\bar z=x-iy$ 把虚部变号。将两者相乘，含虚数单位的交叉项恰好抵消：

$$z\bar z=(x+iy)(x-iy)=x^2-i^2y^2=x^2+y^2.$$

这就给复数除法提供了一个实数分母。分子分母同时乘分母的共轭，相当于整个分式乘以一；前提是原分母不为零。

$$\frac{3+2i}{1-i}=\frac{(3+2i)(1+i)}{(1-i)(1+i)}
=\frac{1+5i}{2}=\frac12+\frac52i.$$

检查时用所得结果乘 $1-i$，应回到 $3+2i$。一般地，只要 $x+iy\ne0$，就有 $x^2+y^2>0$，因此这个除法过程成立。

<section class="worked-example" markdown="1">

### 把一个复数方程拆成两个实数方程 {#demonstration}

**Demonstration (self-written):** Solve $z+2\bar z=6-i$.

未知数与它的共轭有关联，因此使用同一组实变量：$z=x+iy$，$\bar z=x-iy$。先把实项与虚项分别合并。

$$z+2\bar z=(x+iy)+2(x-iy)=3x-iy.$$

两个复数相等，要求实部和虚部分别相等。因此 $3x=6$、$-y=-1$，得到 $z=2+i$。代回原式核对：$(2+i)+2(2-i)=6-i$。

</section>

遇到二次方程，配方能直接显示非实根从哪里来：

$$\begin{aligned}
&z^2-2z+5=0\\
&\Longleftrightarrow (z-1)^2=-4\\
&\Longleftrightarrow z=1\pm2i.
\end{aligned}$$

对于实系数二次方程，求根公式给出实根或一对共轭非实根：判别式为负时，两个根的虚部正好互为相反数。“实系数”这个条件不能省略；例如 $z-i=0$ 并没有另一个根 $-i$。

## 2. 模、辐角与轨迹 {#geometry}

Argand 图把 $x+iy$ 画在点 $(x,y)$ 上。横轴表示实部，纵轴表示虚部。模是该点到原点的距离，因此勾股定理给出 $r=\lvert z\rvert=\sqrt{x^2+y^2}$。

对于非零点，辐角表示从实轴正方向转到该点的方向角。本页使用主辐角范围 $-\pi<\theta\le\pi$。零没有确定的方向，因此没有辐角。将半径投影到两条坐标轴上，得到

$$\begin{aligned}
&x=r\cos\theta,\qquad y=r\sin\theta,\\
&z=r(\cos\theta+i\sin\theta).
\end{aligned}$$

以 $-1+i$ 为例，距离是 $\sqrt2$，位置在第二象限。参考角是 $\pi/4$，因此主辐角是 $3\pi/4$。于是

$$-1+i=\sqrt2\left(\cos\frac{3\pi}{4}+i\sin\frac{3\pi}{4}\right).$$

只对坐标比取反正切，可能落到错误象限。选角之前，先检查两个坐标的正负。

### 把条件翻译成轨迹 {#loci}

若 $a$ 是固定复数，$z-a$ 表示从它所在的点指向 $z$ 所在点的位移。因此 $\lvert z-a\rvert$ 测量的是到这个固定点的距离，不一定是到原点的距离。

当 $r>0$ 时，$\lvert z-a\rvert=r$ 表示圆心为 $a$、半径为 $r$ 的圆。$\arg(z-a)=\theta$ 表示沿该方向出发的射线；端点必须排除，因为端点处位移为零，没有辐角。到两个不同固定点等距，则得到它们连线的垂直平分线。

先在下图中指出圆心、射线被排除的端点以及半径，再往下读。

![Argand diagram with real and imaginary axes: a circle centred at 1 with radius 2 and a ray at angle pi/4 from the excluded endpoint 1.](/alevel/as-further-mathematics/diagrams/argand.svg){: width="360" height="310" }

圆确定距离，射线确定方向。“同时满足”两个条件，就要找交集。从圆心出发，沿射线走两个单位：

$$z=1+2\left(\cos\frac\pi4+i\sin\frac\pi4\right)
=1+\sqrt2+i\sqrt2.$$

圆上相反方向的点虽然距离正确，方向却不符合条件，不能算第二个解。

## 3. 二次根的变换 {#roots}

设二次方程的根为 $\alpha,\beta$。先展开因式，看看系数的符号从哪里来：

$$(w-\alpha)(w-\beta)=w^2-(\alpha+\beta)w+\alpha\beta.$$

对于 $az^2+bz+c=0$，其中 $a\ne0$，先除以首项系数，再比较系数：根和为 $S=-b/a$，根积为 $P=c/a$。构造变换后的方程时，要先找到**新根**的和与积，再用相同的展开式。

<section class="worked-example" markdown="1">

#### 示范：变换为倒数根

对于 $z^2-3z+4=0$，已知 $S=3$、$P=4$。若要将两个根变成它们的倒数，先检查 $P\ne0$：这保证两个根都不是零。

$$\frac1\alpha+\frac1\beta=\frac{\alpha+\beta}{\alpha\beta}=\frac34,
\qquad \frac1\alpha\frac1\beta=\frac14.$$

新方程为 $w^2-\frac34w+\frac14=0$，即 $4w^2-3w+1=0$。再用最终系数反算根和、根积，可以快速检查符号。

</section>

<section class="lesson-check" markdown="1">

#### 停下来补步骤

**Scaffold (self-written):** For roots of $z^2-3z+4=0$, derive an expression for $\alpha^2+\beta^2$ in terms of $S=\alpha+\beta$ and $P=\alpha\beta$ and form the quadratic with roots $\alpha^2,\beta^2$.

<details markdown="1"><summary>补步骤提示</summary>

展开 $(\alpha+\beta)^2$。新根的乘积中，把 $\alpha^2\beta^2$ 改写为 $(\alpha\beta)^2$。

</details>

<details markdown="1"><summary>步骤核对</summary>

$S^2=\alpha^2+2\alpha\beta+\beta^2$，因此新根和为 $9-8=1$。新根积是 $P^2=16$，故 $w^2-w+16=0$。两个根分别平方后，它们的乘积也必须平方。

</details>

</section>

## 独立检查 {#practice}

先写推理，再打开帮助。用过提示的作答记作“借助提示完成”，不记作独立完成。这组题混合前面三个学习段，题目标题不会替你指定方法。

<section class="lesson-check" markdown="1">

#### 题目 1 {#practice-1}

**Independent task (self-written):** Solve $(1+i)z+\bar z=4+2i$. Show your working and check your answer.

<details markdown="1"><summary>提示</summary>

用同一组实变量表示未知数及其共轭。

</details>

<details markdown="1"><summary>解答与检查</summary>

设 $z=x+iy$，展开得到

$$\begin{aligned}
&(1+i)(x+iy)+x-iy\\
&=(2x-y)+ix.
\end{aligned}$$

因此 $x=2$、$2x-y=4$，所以 $y=0$、$z=2$。代回可得 $(1+i)2+2=4+2i$。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 题目 2 {#practice-2}

**Independent task (self-written):** Express $\dfrac{2-i}{1+i}$ in the form $x+iy$. Solve $z^2-2z+10=0$ and explain the relation between the roots.

<details markdown="1"><summary>提示</summary>

选择能使分母成为实数的乘数；二次方程可先配方。

</details>

<details markdown="1"><summary>解答与检查</summary>

乘以分母的共轭，得到

$$\frac{2-i}{1+i}=\frac{(2-i)(1-i)}2=\frac12-\frac32i.$$

二次方程可写成 $(z-1)^2=-9$，故 $z=1\pm3i$。两根互为共轭；这里系数为实数，根为非实数。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 题目 3 {#practice-3}

**Independent task (self-written):** Find every $z$ satisfying $\lvert z+1\rvert=2$ and $\arg(z+1)=3\pi/4$. Sketch both loci and mark the solution.

<details markdown="1"><summary>提示</summary>

找到位移的起点，再使用长度与方向。

</details>

<details markdown="1"><summary>解答与检查</summary>

圆心是 $-1$，不是 $1$。半径为二；射线从这个圆心向第二象限方向伸出，端点不取。

$$\begin{aligned}
&z=-1+2\left(\cos\frac{3\pi}{4}+i\sin\frac{3\pi}{4}\right)\\
&=-1-\sqrt2+i\sqrt2.
\end{aligned}$$

草图应标出两条轴、圆心、半径、排除的端点和唯一交点。检查 $z+1=-\sqrt2+i\sqrt2$：它的模为二，主辐角为 $3\pi/4$。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 题目 4 {#practice-4}

**Independent task (self-written):** Describe $\lvert z-2\rvert=\lvert z+2\rvert$. State whether $z=0$ lies on this locus and whether it has an argument.

<details markdown="1"><summary>提示</summary>

先解释两个距离，再判断原点。

</details>

<details markdown="1"><summary>解答与检查</summary>

两个固定点是实轴上的 $2$ 和 $-2$。它们的垂直平分线是虚轴，即 $x=0$。原点到两点距离都为二，因此属于轨迹。它仍然没有辐角；这道距离条件并没有要求辐角存在。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 题目 5 {#practice-5}

**Independent task (self-written):** The roots of $z^2-3z+4=0$ are $\alpha,\beta$. Form a quadratic with integer coefficients whose roots are $\alpha+1/\alpha$ and $\beta+1/\beta$. Justify any nonzero condition you use.

<details markdown="1"><summary>提示</summary>

将新根积展开成四项，把其中两个比值的和改写成原根和、根积。

</details>

<details markdown="1"><summary>解答与检查</summary>

$S=3$、$P=4\ne0$，所以两个倒数均存在。新根和为

$$S_{\rm new}=S+\frac SP=\frac{15}{4}.$$

展开新根的乘积，不要把两个“和”直接相乘：

$$\begin{aligned}
P_{\rm new}&=\alpha\beta+\frac\alpha\beta+\frac\beta\alpha+\frac1{\alpha\beta}\\
&=P+\frac{S^2-2P}{P}+\frac1P=\frac92.
\end{aligned}$$

$$4w^2-15w+18=0.$$

由最终系数反算，根和为 $15/4$、根积为 $18/4=9/2$。如果保留了旧根积，请回看四项展开。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 题目 6 {#practice-6}

**Independent task (self-written):** For $z=-\sqrt3-i$, find its modulus and principal argument, and express it in the form $r(\cos\theta+i\sin\theta)$. Mark its position on an Argand diagram.

<details markdown="1"><summary>提示</summary>

先检查两个坐标的符号；参考角与主辐角不一定相同。

</details>

<details markdown="1"><summary>解答与检查</summary>

模为 $\sqrt{3+1}=2$。点在第三象限，参考角为 $\pi/6$；主辐角是 $-5\pi/6$。因此 $z=2(\cos(-5\pi/6)+i\sin(-5\pi/6))$。草图应在第三象限标点，并画出顺时针方向角；代回三角形式应恢复两个负分量。

</details>

</section>

## 纠错与再尝试 {#retry}

根据首次作答选回补位置。实虚部或符号出错，回到[方程展开](#demonstration)；分母未化成实数，回到[共轭](#conjugate)；圆心或端点判断出错，回到[轨迹](#loci)；新根关系出错，回到[因式展开](#roots)；[题目 6](#practice-6) 的模、象限或极形式出错，回到[距离与方向](#geometry)，再做[再尝试 5](#retry-5)。回看后收起原解答，再做对应题。

<section class="lesson-check" markdown="1">

#### 再尝试 1 {#retry-1}

**Retry (self-written):** Solve $2z+\bar z=9+2i$ and verify your result.

<details markdown="1"><summary>提示</summary>

分别收集实部和虚部的系数。

</details>

<details markdown="1"><summary>解答与检查</summary>

$3x+iy=9+2i$ 得 $z=3+2i$；代回为 $2(3+2i)+(3-2i)=9+2i$。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 再尝试 2 {#retry-2}

**Retry (self-written):** Express $\dfrac{1+2i}{1-i}$ in rectangular form. Solve $z^2+4z+13=0$.

<details markdown="1"><summary>提示</summary>

乘分母的共轭；二次式配方。

</details>

<details markdown="1"><summary>解答与检查</summary>

分子变为 $-1+3i$，分母为二，得到 $-\frac12+\frac32i$。配方得 $(z+2)^2=-9$，因此 $z=-2\pm3i$。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 再尝试 3 {#retry-3}

**Retry (self-written):** Find all points satisfying $\lvert z-2\rvert=\sqrt2$ and $\arg(z-2)=-3\pi/4$. Also describe $\lvert z-1\rvert=\lvert z+3\rvert$ and decide whether the origin belongs to it.

<details markdown="1"><summary>提示</summary>

位移从正确圆心出发，检查两个分量的符号。第二条轨迹先找两个固定点的中点。

</details>

<details markdown="1"><summary>解答与检查</summary>

位移是 $-1-i$，因此 $z=1-i$。位移 $z-2$ 的模为 $\sqrt2$、辐角为 $-3\pi/4$；这是相对于起点 $2$ 的方向。第二条轨迹为 $x=-1$；原点不在其上，因为它到两点的距离分别是一和三。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 再尝试 4 {#retry-4}

**Retry (self-written):** If $\alpha,\beta$ are the roots of $z^2-2z+2=0$, form the equation with roots $\alpha+1/\alpha,\beta+1/\beta$. Explain why these expressions exist.

<details markdown="1"><summary>提示</summary>

用新的系数重新计算新根和以及四项展开的新根积。

</details>

<details markdown="1"><summary>解答与检查</summary>

$S=2$、$P=2\ne0$。新根和为 $3$、新根积为 $5/2$，故 $2w^2-6w+5=0$。要核对两个系数关系，不能只检查常数项。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 再尝试 5 {#retry-5}

**Retry (self-written):** For $z=\sqrt3-i$, find its modulus and principal argument, and give its trigonometric form.

<details markdown="1"><summary>提示</summary>

回看[几何表示](#geometry)，先定象限再选主辐角。

</details>

<details markdown="1"><summary>解答与检查</summary>

模为 $2$，点在第四象限，主辐角为 $-\pi/6$。因此 $z=2(\cos(-\pi/6)+i\sin(-\pi/6))$。代回得到正实部、负虚部。

</details>

</section>

## 下一课后的回顾 {#later-review}

学完下一课后，不重读示范，直接回来做这道题。它连接坐标、方程根与几何关系；记录自己是否用过提示。

<section class="lesson-check" markdown="1">

#### 回顾任务

**Later review (self-written):** Points $A$ and $B$ represent the roots of $z^2+2z+5=0$. Find the roots and sketch the locus of points equidistant from $A$ and $B$. Form a quadratic with integer coefficients whose roots are the reciprocals of the original roots. Explain how the two reciprocal points are related geometrically.

<details markdown="1"><summary>延后检查提示</summary>

先找到两个点的位置，再判断等距轨迹。新方程可用原根和与根积构造；随后将倒数写成直角形式，核对几何关系。

</details>

<details markdown="1"><summary>延后检查解答</summary>

原根为 $-1\pm2i$。连线竖直，中点是 $(-1,0)$，因此垂直平分线为实轴 $y=0$；草图应标明这些特征。原根和为 $-2$、根积为 $5\ne0$。新根和为 $-2/5$、根积为 $1/5$，方程为 $5w^2+2w+1=0$。倒数所在的点为 $(-1\mp2i)/5$，它们关于实轴对称。共轭改变纵坐标的符号，横坐标不变。

</details>

</section>

## 学完之后 {#next-step}

能解释选法，并且不借助提示完成对应重试后，继续学习[级数](/zh/alevel/as-further-mathematics/series/)。把本页的[延后检查](#later-review)留作下一课后的回顾任务。仍有困难时，沿上方的回补链接修复具体步骤，再尝试一次。

## 来源与范围 {#sources}

本页全部练习均为**自拟题（self-written）**，没有官方分值。范围为 FP1.3、FP1.4；一般多项式根理论和 De Moivre 留在 FM03。

<details markdown="1"><summary>官方依据与样卷身份</summary>

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

FM01 样卷身份：QP 正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本有差异；官网配套 MS 为样卷、版权 2017，并非某正式考季的实考 Final MS。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.3 FP1.4.
- FM01 specimen Q2, Q4, Q7; QP pp.3–6,10–11, MS pp.4–5,8. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).


</details>

[上一课](/zh/alevel/as-further-mathematics/trigonometric-solutions/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/series/)
