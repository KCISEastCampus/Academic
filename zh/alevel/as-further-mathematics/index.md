---
title: AS 高等数学
layout: subjects
reading_layout: true
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/
permalink: /zh/alevel/as-further-mathematics/
toc_headings: "#learning-route, #entry-diagnosis, #route-a, #route-b, #route-s, #route-m, #exit-check, #course-sources, #reference-notes"
---

## 从这里开始 {#learning-route}

这门课衔接普通 AS 数学，学习 OxfordAQA **9665 的 FM01 与 FM02**。第一次学习，从[有理函数](/zh/alevel/as-further-mathematics/rational-functions/)开始；已经学过部分内容，可以直接选择下方分支。

每课先建立概念并看完整示范，再自己作答。提示和解答分别收起；用过提示就记作“借助提示完成”。出错后按反馈回补，再做对应重试。

先修不确定时用[入口诊断](#entry-diagnosis)定位回补。学完一个分支后做[综合与延后回顾](#exit-check)。旧笔记放在页末[参考区](#reference-notes)，无需先读。

### FM01 · 纯数 {#route-a}

按下列顺序学习；复数调用三角与二次理论，级数调用因式分解，微积分部分调用普通 AS 导数与积分。

- [有理函数](/zh/alevel/as-further-mathematics/rational-functions/) — 画出草图、解不等式，并论证值域。
- [圆锥曲线与轨迹](/zh/alevel/as-further-mathematics/conics-and-loci/) — 把距离条件、方程和相切联系起来。
- [三角方程](/zh/alevel/as-further-mathematics/trigonometric-solutions/) — 给出全部解并说明没有遗漏。
- [复数与二次根](/zh/alevel/as-further-mathematics/complex-numbers-and-roots/) — 联系复数运算、Argand 几何与根的变换。
- [级数](/zh/alevel/as-further-mathematics/series/) — 选择求和方法并检查部分和极限。
- [变化率与近似](/zh/alevel/as-further-mathematics/rates-and-approximations/) — 建立导数、连接变化率并检查微小变化估计。
- [反常积分](/zh/alevel/as-further-mathematics/improper-integrals/) — 用正确极限处理无穷端点与奇点。

### FM02 · 纯数 {#route-b}

先矩阵，再平面变换；线性化需要对数。变化率之后学习数值求根，再进 Euler。

- [矩阵运算](/zh/alevel/as-further-mathematics/matrix-algebra/) — 核对维数、逆与运算次序。
- [平面变换](/zh/alevel/as-further-mathematics/transformations/) — 解释组合、面积及一般不变直线。
- [线性化](/zh/alevel/as-further-mathematics/linearisation/) — 选择坐标、实际作图并估计常数。
- [数值求根](/zh/alevel/as-further-mathematics/numerical-roots/) — 追踪更新过程，说明精度的依据。
- [Euler 方法](/zh/alevel/as-further-mathematics/euler-method/) — 用旧点斜率更新并解释近似的局限。

### FM02 · 统计 {#route-s}

先贝叶斯，再学习两个分布；推导过均值和方差后学习 PGF，最后做线性组合。

- [贝叶斯定理](/zh/alevel/as-further-mathematics/bayes/) — 构造概率树，改变条件样本空间。
- [离散均匀分布](/zh/alevel/as-further-mathematics/discrete-uniform/) — 检查等可能条件并推导均值、方差。
- [几何分布](/zh/alevel/as-further-mathematics/geometric-distribution/) — 定义计数对象，计算尾概率并推导两矩。
- [概率生成函数](/zh/alevel/as-further-mathematics/generating-functions/) — 推导 PGF、提取概率并组合独立变量。
- [随机变量线性组合](/zh/alevel/as-further-mathematics/linear-combinations/) — 处理负系数、协方差及相关的条件。

### FM02 · 力学 {#route-m}

相对运动建立二维向量记号；量纲帮助检查方程；碰撞还需要普通 AS 的带符号动量。

- [相对运动](/zh/alevel/as-further-mathematics/relative-motion/) — 用向量和几何建立拦截与最近距离模型。
- [量纲分析](/zh/alevel/as-further-mathematics/dimensions/) — 求单位与指数，解释量纲无法确定什么。
- [冲量与碰撞](/zh/alevel/as-further-mathematics/impulse-and-collisions/) — 先选系统与方向，再使用冲量或碰撞规律。

### 入口诊断与回补 {#entry-diagnosis}

按准备学习的分支选择相关小问。写出过程，先不打开解答；不需要把五项全做完才允许开始。

<section class="lesson-check" markdown="1">

#### 先修检查

**Task (self-written):** (a) Factor $x^2-x-2$. (b) Solve $\sin\theta=1/2$ for $0\le\theta<2\pi$. (c) Differentiate $x^3$ and integrate $x^2$ from 0 to 2. (d) If $P(A)=0.4$ and $P(B\mid A)=0.2$, find $P(A\cap B)$. (e) A 2 kg particle changes velocity from −1 to 3 m s⁻¹; find its signed impulse.

<details markdown="1"><summary>提示</summary>

分别检查积与和、单位圆象限、幂法则、联合概率和带符号速度。

</details>

<details markdown="1"><summary>解答、检查与回补</summary>

$$\begin{aligned}
    (a)&\quad(x-2)(x+1),\\
    (b)&\quad\theta=\pi/6,\ 5\pi/6,\\
    (c)&\quad3x^2,\quad[x^3/3]_0^2=8/3,\\
    (d)&\quad P(A\cap B)=0.4(0.2)=0.08,\\
    (e)&\quad J=2[3-(-1)]=8\ \mathrm{N\,s}.
    \end{aligned}$$

(a) [二次理论](/zh/alevel/as-mathematics/algebra/#l02)；(b) [周期与区间解](/zh/alevel/as-mathematics/trigonometry/#l16)；(c) [导数](/zh/alevel/as-mathematics/differentiation/#l06)与[定积分](/zh/alevel/as-mathematics/integration/#l08)；(d) [条件概率](/zh/alevel/as-mathematics/probability/#l18)；(e) [带符号动量](/zh/alevel/as-mathematics/momentum/)。因式分解可展开核对；三角须检查两个象限；沿同一条路径将概率相乘，得到联合概率；冲量是末动量减初动量。回补后关闭本解答，完成下面的对应小问。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 回补后的重试

**Task (self-written):** (a) Factor $x^2+2x-3$. (b) Solve $\cos\theta=-1/2$ for $0\le\theta<2\pi$. (c) Differentiate $x^4$ and integrate $x$ from 0 to 3. (d) If $P(C)=0.3$ and $P(D\mid C)=0.5$, find $P(C\cap D)$. (e) A 3 kg particle changes velocity from 2 to −1 m s⁻¹; find its signed impulse.

<details markdown="1"><summary>提示</summary>

沿用刚修复的原理，独立检查符号和区间。

</details>

<details markdown="1"><summary>解答、检查与回补</summary>

$$\begin{aligned}
    (a)&\quad(x+3)(x-1),\\
    (b)&\quad\theta=2\pi/3,\ 4\pi/3,\\
    (c)&\quad4x^3,\quad[x^2/2]_0^3=9/2,\\
    (d)&\quad P(C\cap D)=0.15,\\
    (e)&\quad J=3(-1-2)=-9\ \mathrm{N\,s}.
    \end{aligned}$$

负冲量表示冲量沿所选正方向的反方向。若仍错，按上题对应链接重做该技能，再进入所选课页的入口检查。

</details>

</section>

### 综合与延后回顾 {#exit-check}

学完相关分支后关闭课页，先选方法再作答。以下是连接知识的抽查；各课的独立任务负责更细的目标检查，它们共同使用，不能把这几题当成整场考试。

<section class="lesson-check" markdown="1">

#### 综合题 1

**Task (self-written):** Give the complete real solution of $\cos(2x)=1/2$ and decide whether $\int_1^\infty x^{-2}\,dx$ is finite. Explain both conclusions.

<details markdown="1"><summary>提示</summary>

周期方程与无穷端点需要不同的论证。

</details>

<details markdown="1"><summary>解答、检查与回补</summary>

$$x=\pm\pi/6+n\pi,\qquad n\in\mathbb Z.$$

$$\int_1^\infty x^{-2}\,dx=\lim_{R\to\infty}(1-1/R)=1.$$


本题在一个完整周期内，cos θ=1/2 有两个解；将整个角2x除以2后，x的重复周期为π；积分不能直接代入“无穷”。漏解回到三角方程，极限不清回到反常积分，再做各页对应重试。

[三角方程](/zh/alevel/as-further-mathematics/trigonometric-solutions/#model) · [反常积分](/zh/alevel/as-further-mathematics/improper-integrals/#model)

</details>

</section>

<section class="lesson-check" markdown="1">

#### 综合题 2

**Task (self-written):** A transformation is $\operatorname{diag}(3,1)$. Find all its invariant lines, including any that miss the origin, and all its fixed points.

<details markdown="1"><summary>提示</summary>

同时保留斜率和截距，另外检查竖线。

</details>

<details markdown="1"><summary>解答、检查与回补</summary>

设 $y=mx+c$，像点为 $(3x,mx+c)$。对每个 $x$ 均需满足 $mx+c=3mx+c$，因此 $m=0$，所有 $y=c$ 不变。竖线 $x=k$ 映为 $x=3k$，只有 $x=0$ 不变。不变点满足 $3x=x$，所以恰是 $x=0$ 上所有点。

不变直线允许点在线上移动；由不变点组成的直线要求每个点不动。缺截距或竖线回到平面变换并做对应重试。

[平面变换](/zh/alevel/as-further-mathematics/transformations/#invariant-lines)

[对应重试](/zh/alevel/as-further-mathematics/transformations/#retry-lines)

</details>

</section>

<section class="lesson-check" markdown="1">

#### 综合题 3

**Task (self-written):** Independent $X,Y$ have PGFs $(1+t)/2$ and $(t+t^2)/2$. Find $P(X+Y=2)$ and the variance of their sum, explaining where independence is used.

<details markdown="1"><summary>提示</summary>

可以用系数或列举结果检查概率，再独立核对方差。

</details>

<details markdown="1"><summary>解答、检查与回补</summary>

$$\begin{aligned}G_{X+Y}(t)&=(t+2t^2+t^3)/4,\\P(X+Y=2)&=1/2,\\\operatorname{Var}(X+Y)&=1/4+1/4=1/2.\end{aligned}$$

独立性使联合概率相乘、PGF相乘，也使协方差为0。X等可能取0、1，Y等可能取1、2；两种和为2的情况。系数错回PGF，方差交叉项错回线性组合。

[概率生成函数](/zh/alevel/as-further-mathematics/generating-functions/#model) · [线性组合](/zh/alevel/as-further-mathematics/linear-combinations/#model)

</details>

</section>

<section class="lesson-check" markdown="1">

#### 综合题 4

**Task (self-written):** Two particles have relative position $(4-t,3)$ m for $t\ge0$ s. Find their closest distance and explain whether they collide. Give a geometric check.

<details markdown="1"><summary>提示</summary>

检查允许时间和相对轨迹是否经过原点。

</details>

<details markdown="1"><summary>解答、检查与回补</summary>

$$d^2=(t-4)^2+9.$$

最小值在允许的 $t=4$ s 处取得，$d=3$ m。相对轨迹是水平线 $y=3$，到原点垂距为3 m，且永不经过原点，因此不会碰撞。

若把轨迹相交等同于同时相遇，回看相对运动中的共同时间与初值；若只最小化代数式而不查时间范围，也回到该页重试。

[共同时间与初值](/zh/alevel/as-further-mathematics/relative-motion/#relative-position) · [允许的最近点](/zh/alevel/as-further-mathematics/relative-motion/#closest-approach) · [对应重试](/zh/alevel/as-further-mathematics/relative-motion/#retry)

</details>

</section>

#### 过后再做

继续学习别的主题后，合上旧解答再做下面两题。记录首次过程、用过的帮助、错误与重试；根据课程节奏安排，不规定统一天数。

<section class="lesson-check" markdown="1">

#### 回顾题 1

**Task (self-written):** For integer $n\ge1$, let $X$ be uniform on $\{1,\ldots,n\}$ and let $Y=2X-1$. Derive $E(X)$ and $\operatorname{Var}(X)$ using finite sums, then find $E(Y)$ and $\operatorname{Var}(Y)$. Is $Y$ uniform on $\{1,2,\ldots,2n-1\}$? Explain.

<details markdown="1"><summary>提示</summary>

先定义每个取值的概率，再计算两个矩；另外检查支持集。

</details>

<details markdown="1"><summary>解答、检查与回补</summary>

$$\begin{aligned}
    E(X)&=\frac1n\frac{n(n+1)}2=\frac{n+1}2,\\
    E(X^2)&=\frac{(n+1)(2n+1)}6,\\
    \operatorname{Var}(X)&=\frac{n^2-1}{12},\\
    E(Y)&=2E(X)-1=n,\\
    \operatorname{Var}(Y)&=4\operatorname{Var}(X)=\frac{n^2-1}3.
    \end{aligned}$$

Y只取奇数1、3、…、2n−1，每个概率1/n。n>1时不是题述全体连续整数上的均匀分布；n=1时两集合都是{1}。若漏平方系数，回到[线性组合](/zh/alevel/as-further-mathematics/linear-combinations/#model)；若推导只列结果，回到[离散均匀的矩推导](/zh/alevel/as-further-mathematics/discrete-uniform/#demonstration)。关闭旧解答后做下方[回补重试1](#later-retry-1)。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 回顾题 2

**Task (self-written):** A ball of mass $m>0$ hits a fixed smooth wall normally at speed $u>0$. Take the incoming direction as positive; its velocity after impact is $-eu$, where $0\le e\le1$ ($e=0$ means no immediate rebound). Find its impulse. Someone proposes that the contact duration is $km/u$, with dimensionless $k$. Assess this proposal, then check the dimensions of impulse.

<details markdown="1"><summary>提示</summary>

画出碰前后带方向速度，分开检查系统和单位。

</details>

<details markdown="1"><summary>解答、检查与回补</summary>

$$J=m(-eu-u)=-(1+e)mu.$$

$$\begin{aligned}[km/u]&=MTL^{-1}\ne T,\\{}[J]&=MLT^{-1}.\end{aligned}$$

墙给球外冲量，不能对球单独用动量守恒。时间式量纲不符，必错；量纲即使相符也不能确定接触模型或无量纲常数。回看[冲量与系统](/zh/alevel/as-further-mathematics/impulse-and-collisions/#wall-model)及[量纲与模型限制](/zh/alevel/as-further-mathematics/dimensions/#model-limits)，然后关闭答案做下方[回补重试2](#later-retry-2)。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 回补重试1 {#later-retry-1}

**Task (self-written):** For integer $r\ge1$, $U$ is uniform on $\{0,\ldots,r-1\}$ and $V=3U+2$. Derive $E(U)$ and $\operatorname{Var}(U)$ from finite sums, then find $E(V)$ and $\operatorname{Var}(V)$. Is $V$ uniform on all integers from 2 to $3r-1$? Include the single-point case.

<details markdown="1"><summary>提示</summary>

写出每个值的概率，再分别求一次方和平方的加权和。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
 E(U)&=\frac1r\sum_{j=0}^{r-1}j=\frac{r-1}2,\\
 E(U^2)&=\frac1r\sum_{j=0}^{r-1}j^2\\
 &=\frac{(r-1)(2r-1)}6,\\
 \operatorname{Var}(U)&=E(U^2)-[E(U)]^2\\
 &=\frac{r^2-1}{12},\\
 E(V)&=3E(U)+2=\frac{3r+1}2,\\
 \operatorname{Var}(V)&=9\operatorname{Var}(U)=\frac{3(r^2-1)}4.
 \end{aligned}$$

V的支持集是2、5、…、3r−1，每项概率1/r。r>1时有缺口，不是在全体连续整数上的均匀分布；r=1时只取2，方差0。必须给出求和到两矩的推理；只引用分布公式仍没有修复推导困难。

</details>

</section>

<section class="lesson-check" markdown="1">

#### 回补重试2 {#later-retry-2}

**Task (self-written):** A 0.5 kg ball approaches a fixed wall at speed 4 m s⁻¹ and leaves at speed 1 m s⁻¹. Take the direction away from the wall as positive. Find the signed impulse on the ball, and explain whether its momentum is conserved. A student proposes $J=mv^2$ for impulse, with $v$ a speed. Check this dimensionally; would matching dimensions prove a collision law?

<details markdown="1"><summary>提示</summary>

先用所选正方向写两个速度，再检查系统边界和MLT。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$\begin{aligned}
 u&=-4\ \mathrm{m\,s^{-1}},\\
 v&=1\ \mathrm{m\,s^{-1}},\\
 J&=0.5[1-(-4)]\\
 &=2.5\ \mathrm{N\,s},\\
 [mv^2]&=ML^2T^{-2},\\
 {}[J]&=MLT^{-1}.
 \end{aligned}$$

正冲量沿离墙方向，球受到墙的外冲量，球单独的动量不守恒。提议式量纲不符；相符也只通过必要检查，不能证明模型或求出无量纲常数。若把速率直接当带符号速度，先画方向箭头，再关闭解答重新建立动量变化。

</details>

</section>

### 范围、考试与来源 {#course-sources}

<details markdown="1"><summary>查看课程身份与参考材料</summary>

依据 [9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) §§3.1–3.2；FM01为FP1，FM02含FPP1、FS1、FM1。两单元各90分钟、80分、各占AS50%；FM02分纯数40、统计20、力学20分。FM01假定普通AS纯数；FM02假定普通AS及FP1。20组学习页覆盖18个官方主题；归纳、De Moivre、三阶逆和特征值不作为本AS路线必修。

公开FM01样卷正文为 **Specimen 2018 Morning**；文件名2019/v3与配套MS版权2017不等于正式2019考季。FM02为 **June 2024**（考试16 May 2024），MS为Version 1.0 Final。每课记录实际读过的QP／MS题号和页码。新题均为self-written，自拟核对点不是官方分值。

精度与作答证据服从具体试卷及command words；计算器核对不能替代证明、推导或图。未新增计算器实机／考试模式验证。内容与技术检查记录在制作文档中；课程尚待真实学生试用，不宣称学习效果已验证。

</details>

## 旧版参考资料 {#reference-notes}

<details markdown="1">
<summary>展开旧主题索引与英文参考链接</summary>

下列为英文原笔记的定位目录，保留原有锚点以支持语言切换。**旧笔记正文尚未全文汉化**；链接均明确指向英文对应段落。完整中文教学、练习与反馈请使用上面的双语学习路线。

- <span id="️-as-level-course-structure"></span><a href="/alevel/as-further-mathematics/#️-as-level-course-structure" hreflang="en">英文参考：🏗️ AS Level Course Structure</a>
- <span id="two-compulsory-units"></span><a href="/alevel/as-further-mathematics/#two-compulsory-units" hreflang="en">英文参考：Two Compulsory Units:</a>
- <span id="unit-fp1-pure-mathematics"></span><a href="/alevel/as-further-mathematics/#unit-fp1-pure-mathematics" hreflang="en">英文参考：Unit FP1: Pure Mathematics</a>
- <span id="unit-fpsm1-pure-mathematics-statistics-and-mechanics"></span><a href="/alevel/as-further-mathematics/#unit-fpsm1-pure-mathematics-statistics-and-mechanics" hreflang="en">英文参考：Unit FPSM1: Pure Mathematics, Statistics and Mechanics</a>
- <span id="-unit-fp1-pure-mathematics"></span><a href="/alevel/as-further-mathematics/#-unit-fp1-pure-mathematics" hreflang="en">英文参考：📘 Unit FP1: Pure Mathematics</a>
- <span id="1-algebra-and-graphs-fp11"></span><a href="/alevel/as-further-mathematics/#1-algebra-and-graphs-fp11" hreflang="en">英文参考：1. Algebra and Graphs (FP1.1)</a>
- <span id="11-rational-functions---complete-foundation"></span><a href="/alevel/as-further-mathematics/#11-rational-functions---complete-foundation" hreflang="en">英文参考：1.1 Rational Functions - Complete Foundation</a>
- <span id="12-conic-sections---deep-understanding"></span><a href="/alevel/as-further-mathematics/#12-conic-sections---deep-understanding" hreflang="en">英文参考：1.2 Conic Sections - Deep Understanding</a>
- <span id="2-coordinate-geometry-fp12"></span><a href="/alevel/as-further-mathematics/#2-coordinate-geometry-fp12" hreflang="en">英文参考：2. Coordinate Geometry (FP1.2)</a>
- <span id="locus-problems---systematic-approach"></span><a href="/alevel/as-further-mathematics/#locus-problems---systematic-approach" hreflang="en">英文参考：Locus Problems - Systematic Approach</a>
- <span id="3-complex-numbers-fp13"></span><a href="/alevel/as-further-mathematics/#3-complex-numbers-fp13" hreflang="en">英文参考：3. Complex Numbers (FP1.3)</a>
- <span id="31-what-are-complex-numbers"></span><a href="/alevel/as-further-mathematics/#31-what-are-complex-numbers" hreflang="en">英文参考：3.1 What are Complex Numbers?</a>
- <span id="32-basic-operations---step-by-step"></span><a href="/alevel/as-further-mathematics/#32-basic-operations---step-by-step" hreflang="en">英文参考：3.2 Basic Operations - Step by Step</a>
- <span id="33-different-forms-of-complex-numbers"></span><a href="/alevel/as-further-mathematics/#33-different-forms-of-complex-numbers" hreflang="en">英文参考：3.3 Different Forms of Complex Numbers</a>
- <span id="34-complex-conjugates"></span><a href="/alevel/as-further-mathematics/#34-complex-conjugates" hreflang="en">英文参考：3.4 Complex Conjugates</a>
- <span id="35-argand-diagram-and-loci"></span><a href="/alevel/as-further-mathematics/#35-argand-diagram-and-loci" hreflang="en">英文参考：3.5 Argand Diagram and Loci</a>
- <span id="4-roots-and-coefficients-fp14"></span><a href="/alevel/as-further-mathematics/#4-roots-and-coefficients-fp14" hreflang="en">英文参考：4. Roots and Coefficients (FP1.4)</a>
- <span id="41-fundamental-relationships"></span><a href="/alevel/as-further-mathematics/#41-fundamental-relationships" hreflang="en">英文参考：4.1 Fundamental Relationships</a>
- <span id="42-advanced-manipulations"></span><a href="/alevel/as-further-mathematics/#42-advanced-manipulations" hreflang="en">英文参考：4.2 Advanced Manipulations</a>
- <span id="43-forming-new-equations"></span><a href="/alevel/as-further-mathematics/#43-forming-new-equations" hreflang="en">英文参考：4.3 Forming New Equations</a>
- <span id="5-series-fp15"></span><a href="/alevel/as-further-mathematics/#5-series-fp15" hreflang="en">英文参考：5. Series (FP1.5)</a>
- <span id="51-essential-summation-formulas"></span><a href="/alevel/as-further-mathematics/#51-essential-summation-formulas" hreflang="en">英文参考：5.1 Essential Summation Formulas</a>
- <span id="52-method-of-differences"></span><a href="/alevel/as-further-mathematics/#52-method-of-differences" hreflang="en">英文参考：5.2 Method of Differences</a>
- <span id="53-advanced-summation-examples"></span><a href="/alevel/as-further-mathematics/#53-advanced-summation-examples" hreflang="en">英文参考：5.3 Advanced Summation Examples</a>
- <span id="6-trigonometry-fp16---general-solutions"></span><a href="/alevel/as-further-mathematics/#6-trigonometry-fp16---general-solutions" hreflang="en">英文参考：6. Trigonometry (FP1.6) - General Solutions</a>
- <span id="61-solving-trigonometric-equations"></span><a href="/alevel/as-further-mathematics/#61-solving-trigonometric-equations" hreflang="en">英文参考：6.1 Solving Trigonometric Equations</a>
- <span id="62-exact-values---must-know"></span><a href="/alevel/as-further-mathematics/#62-exact-values---must-know" hreflang="en">英文参考：6.2 Exact Values - Must Know</a>
- <span id="63-worked-examples"></span><a href="/alevel/as-further-mathematics/#63-worked-examples" hreflang="en">英文参考：6.3 Worked Examples</a>
- <span id="7-calculus-fp17"></span><a href="/alevel/as-further-mathematics/#7-calculus-fp17" hreflang="en">英文参考：7. Calculus (FP1.7)</a>
- <span id="71-first-principles-differentiation"></span><a href="/alevel/as-further-mathematics/#71-first-principles-differentiation" hreflang="en">英文参考：7.1 First Principles Differentiation</a>
- <span id="72-connected-rates-of-change"></span><a href="/alevel/as-further-mathematics/#72-connected-rates-of-change" hreflang="en">英文参考：7.2 Connected Rates of Change</a>
- <span id="73-small-changes"></span><a href="/alevel/as-further-mathematics/#73-small-changes" hreflang="en">英文参考：7.3 Small Changes</a>
- <span id="74-improper-integrals"></span><a href="/alevel/as-further-mathematics/#74-improper-integrals" hreflang="en">英文参考：7.4 Improper Integrals</a>
- <span id="-unit-fpsm1-pure-mathematics-statistics-and-mechanics"></span><a href="/alevel/as-further-mathematics/#-unit-fpsm1-pure-mathematics-statistics-and-mechanics" hreflang="en">英文参考：📗 Unit FPSM1: Pure Mathematics, Statistics and Mechanics</a>
- <span id="fpp11-matrices-and-transformations"></span><a href="/alevel/as-further-mathematics/#fpp11-matrices-and-transformations" hreflang="en">英文参考：FPP1.1: Matrices and Transformations</a>
- <span id="11-matrix-algebra"></span><a href="/alevel/as-further-mathematics/#11-matrix-algebra" hreflang="en">英文参考：1.1 Matrix Algebra</a>
- <span id="definitions"></span><a href="/alevel/as-further-mathematics/#definitions" hreflang="en">英文参考：Definitions</a>
- <span id="addition-and-subtraction"></span><a href="/alevel/as-further-mathematics/#addition-and-subtraction" hreflang="en">英文参考：Addition and Subtraction</a>
- <span id="scalar-multiplication"></span><a href="/alevel/as-further-mathematics/#scalar-multiplication" hreflang="en">英文参考：Scalar Multiplication</a>
- <span id="matrix-multiplication"></span><a href="/alevel/as-further-mathematics/#matrix-multiplication" hreflang="en">英文参考：Matrix Multiplication</a>
- <span id="identity-matrix"></span><a href="/alevel/as-further-mathematics/#identity-matrix" hreflang="en">英文参考：Identity Matrix</a>
- <span id="inverse-of-a-2-times-2-matrix"></span><a href="/alevel/as-further-mathematics/#inverse-of-a-2-times-2-matrix" hreflang="en">英文参考：Inverse of a $2 \times 2$ Matrix</a>
- <span id="transpose-of-a-matrix"></span><a href="/alevel/as-further-mathematics/#transpose-of-a-matrix" hreflang="en">英文参考：Transpose of a Matrix</a>
- <span id="12-transformations-in-the-x-y-plane"></span><a href="/alevel/as-further-mathematics/#12-transformations-in-the-x-y-plane" hreflang="en">英文参考：1.2 Transformations in the $x$-$y$ Plane</a>
- <span id="standard-transformation-matrices"></span><a href="/alevel/as-further-mathematics/#standard-transformation-matrices" hreflang="en">英文参考：Standard Transformation Matrices</a>
- <span id="combinations-of-transformations"></span><a href="/alevel/as-further-mathematics/#combinations-of-transformations" hreflang="en">英文参考：Combinations of Transformations</a>
- <span id="determinant-and-area-scale-factor"></span><a href="/alevel/as-further-mathematics/#determinant-and-area-scale-factor" hreflang="en">英文参考：Determinant and Area Scale Factor</a>
- <span id="13-invariant-points-and-lines"></span><a href="/alevel/as-further-mathematics/#13-invariant-points-and-lines" hreflang="en">英文参考：1.3 Invariant Points and Lines</a>
- <span id="invariant-points"></span><a href="/alevel/as-further-mathematics/#invariant-points" hreflang="en">英文参考：Invariant Points</a>
- <span id="lines-of-invariant-points"></span><a href="/alevel/as-further-mathematics/#lines-of-invariant-points" hreflang="en">英文参考：Lines of Invariant Points</a>
- <span id="invariant-lines"></span><a href="/alevel/as-further-mathematics/#invariant-lines" hreflang="en">英文参考：Invariant Lines</a>
- <span id="fpp12-linear-graphs--reducing-to-linear-form"></span><a href="/alevel/as-further-mathematics/#fpp12-linear-graphs--reducing-to-linear-form" hreflang="en">英文参考：FPP1.2: Linear Graphs – Reducing to Linear Form</a>
- <span id="21-transforming-non-linear-relationships"></span><a href="/alevel/as-further-mathematics/#21-transforming-non-linear-relationships" hreflang="en">英文参考：2.1 Transforming Non-Linear Relationships</a>
- <span id="case-1-power-law-y--kxn"></span><a href="/alevel/as-further-mathematics/#case-1-power-law-y--kxn" hreflang="en">英文参考：Case 1: Power Law $y = kx^n$</a>
- <span id="case-2-exponential-law-y--k-cdot-ax"></span><a href="/alevel/as-further-mathematics/#case-2-exponential-law-y--k-cdot-ax" hreflang="en">英文参考：Case 2: Exponential Law $y = k \cdot a^x$</a>
- <span id="case-3-reciprocal-relationship-frac1y--a--fracbx"></span><a href="/alevel/as-further-mathematics/#case-3-reciprocal-relationship-frac1y--a--fracbx" hreflang="en">英文参考：Case 3: Reciprocal Relationship $\frac{1}{y} = a + \frac{b}{x}$</a>
- <span id="case-4-quadratic-form-y2--ax3--b"></span><a href="/alevel/as-further-mathematics/#case-4-quadratic-form-y2--ax3--b" hreflang="en">英文参考：Case 4: Quadratic Form $y^2 = ax^3 + b$</a>
- <span id="fpp13-numerical-methods"></span><a href="/alevel/as-further-mathematics/#fpp13-numerical-methods" hreflang="en">英文参考：FPP1.3: Numerical Methods</a>
- <span id="31-location-of-roots"></span><a href="/alevel/as-further-mathematics/#31-location-of-roots" hreflang="en">英文参考：3.1 Location of Roots</a>
- <span id="32-interval-bisection"></span><a href="/alevel/as-further-mathematics/#32-interval-bisection" hreflang="en">英文参考：3.2 Interval Bisection</a>
- <span id="33-linear-interpolation"></span><a href="/alevel/as-further-mathematics/#33-linear-interpolation" hreflang="en">英文参考：3.3 Linear Interpolation</a>
- <span id="34-newton-raphson-method"></span><a href="/alevel/as-further-mathematics/#34-newton-raphson-method" hreflang="en">英文参考：3.4 Newton-Raphson Method</a>
- <span id="35-eulers-method-for-differential-equations"></span><a href="/alevel/as-further-mathematics/#35-eulers-method-for-differential-equations" hreflang="en">英文参考：3.5 Euler’s Method for Differential Equations</a>
- <span id="fs11-bayes-theorem"></span><a href="/alevel/as-further-mathematics/#fs11-bayes-theorem" hreflang="en">英文参考：FS1.1: Bayes’ Theorem</a>
- <span id="11-conditional-probability-review"></span><a href="/alevel/as-further-mathematics/#11-conditional-probability-review" hreflang="en">英文参考：1.1 Conditional Probability Review</a>
- <span id="12-law-of-total-probability"></span><a href="/alevel/as-further-mathematics/#12-law-of-total-probability" hreflang="en">英文参考：1.2 Law of Total Probability</a>
- <span id="13-bayes-theorem"></span><a href="/alevel/as-further-mathematics/#13-bayes-theorem" hreflang="en">英文参考：1.3 Bayes’ Theorem</a>
- <span id="14-tree-diagrams"></span><a href="/alevel/as-further-mathematics/#14-tree-diagrams" hreflang="en">英文参考：1.4 Tree Diagrams</a>
- <span id="fs12-discrete-uniform-distribution"></span><a href="/alevel/as-further-mathematics/#fs12-discrete-uniform-distribution" hreflang="en">英文参考：FS1.2: Discrete Uniform Distribution</a>
- <span id="21-definition"></span><a href="/alevel/as-further-mathematics/#21-definition" hreflang="en">英文参考：2.1 Definition</a>
- <span id="22-probability-mass-function-pmf"></span><a href="/alevel/as-further-mathematics/#22-probability-mass-function-pmf" hreflang="en">英文参考：2.2 Probability Mass Function (PMF)</a>
- <span id="23-cumulative-distribution-function-cdf"></span><a href="/alevel/as-further-mathematics/#23-cumulative-distribution-function-cdf" hreflang="en">英文参考：2.3 Cumulative Distribution Function (CDF)</a>
- <span id="24-mean-and-variance"></span><a href="/alevel/as-further-mathematics/#24-mean-and-variance" hreflang="en">英文参考：2.4 Mean and Variance</a>
- <span id="25-probability-calculations"></span><a href="/alevel/as-further-mathematics/#25-probability-calculations" hreflang="en">英文参考：2.5 Probability Calculations</a>
- <span id="fs13-geometric-distribution"></span><a href="/alevel/as-further-mathematics/#fs13-geometric-distribution" hreflang="en">英文参考：FS1.3: Geometric Distribution</a>
- <span id="31-definition"></span><a href="/alevel/as-further-mathematics/#31-definition" hreflang="en">英文参考：3.1 Definition</a>
- <span id="32-probability-mass-function"></span><a href="/alevel/as-further-mathematics/#32-probability-mass-function" hreflang="en">英文参考：3.2 Probability Mass Function</a>
- <span id="33-cumulative-distribution-function"></span><a href="/alevel/as-further-mathematics/#33-cumulative-distribution-function" hreflang="en">英文参考：3.3 Cumulative Distribution Function</a>
- <span id="34-mean-and-variance"></span><a href="/alevel/as-further-mathematics/#34-mean-and-variance" hreflang="en">英文参考：3.4 Mean and Variance</a>
- <span id="35-memoryless-property"></span><a href="/alevel/as-further-mathematics/#35-memoryless-property" hreflang="en">英文参考：3.5 Memoryless Property</a>
- <span id="fs14-probability-generating-functions-pgf"></span><a href="/alevel/as-further-mathematics/#fs14-probability-generating-functions-pgf" hreflang="en">英文参考：FS1.4: Probability Generating Functions (PGF)</a>
- <span id="41-definition"></span><a href="/alevel/as-further-mathematics/#41-definition" hreflang="en">英文参考：4.1 Definition</a>
- <span id="42-properties"></span><a href="/alevel/as-further-mathematics/#42-properties" hreflang="en">英文参考：4.2 Properties</a>
- <span id="43-pgfs-for-common-distributions"></span><a href="/alevel/as-further-mathematics/#43-pgfs-for-common-distributions" hreflang="en">英文参考：4.3 PGFs for Common Distributions</a>
- <span id="44-sum-of-independent-random-variables"></span><a href="/alevel/as-further-mathematics/#44-sum-of-independent-random-variables" hreflang="en">英文参考：4.4 Sum of Independent Random Variables</a>
- <span id="fs15-linear-combinations-of-discrete-random-variables"></span><a href="/alevel/as-further-mathematics/#fs15-linear-combinations-of-discrete-random-variables" hreflang="en">英文参考：FS1.5: Linear Combinations of Discrete Random Variables</a>
- <span id="51-expectation-of-a-linear-combination"></span><a href="/alevel/as-further-mathematics/#51-expectation-of-a-linear-combination" hreflang="en">英文参考：5.1 Expectation of a Linear Combination</a>
- <span id="52-variance-of-a-linear-combination"></span><a href="/alevel/as-further-mathematics/#52-variance-of-a-linear-combination" hreflang="en">英文参考：5.2 Variance of a Linear Combination</a>
- <span id="53-covariance"></span><a href="/alevel/as-further-mathematics/#53-covariance" hreflang="en">英文参考：5.3 Covariance</a>
- <span id="54-correlation-coefficient"></span><a href="/alevel/as-further-mathematics/#54-correlation-coefficient" hreflang="en">英文参考：5.4 Correlation Coefficient</a>
- <span id="fm11-constant-velocity-in-two-dimensions"></span><a href="/alevel/as-further-mathematics/#fm11-constant-velocity-in-two-dimensions" hreflang="en">英文参考：FM1.1: Constant Velocity in Two Dimensions</a>
- <span id="11-vector-representation"></span><a href="/alevel/as-further-mathematics/#11-vector-representation" hreflang="en">英文参考：1.1 Vector Representation</a>
- <span id="12-speed-and-distance"></span><a href="/alevel/as-further-mathematics/#12-speed-and-distance" hreflang="en">英文参考：1.2 Speed and Distance</a>
- <span id="13-relative-velocity"></span><a href="/alevel/as-further-mathematics/#13-relative-velocity" hreflang="en">英文参考：1.3 Relative Velocity</a>
- <span id="14-interception-problems"></span><a href="/alevel/as-further-mathematics/#14-interception-problems" hreflang="en">英文参考：1.4 Interception Problems</a>
- <span id="15-closest-approach"></span><a href="/alevel/as-further-mathematics/#15-closest-approach" hreflang="en">英文参考：1.5 Closest Approach</a>
- <span id="fm12-dimensional-analysis"></span><a href="/alevel/as-further-mathematics/#fm12-dimensional-analysis" hreflang="en">英文参考：FM1.2: Dimensional Analysis</a>
- <span id="21-base-dimensions"></span><a href="/alevel/as-further-mathematics/#21-base-dimensions" hreflang="en">英文参考：2.1 Base Dimensions</a>
- <span id="22-derived-dimensions"></span><a href="/alevel/as-further-mathematics/#22-derived-dimensions" hreflang="en">英文参考：2.2 Derived Dimensions</a>
- <span id="23-dimensional-homogeneity"></span><a href="/alevel/as-further-mathematics/#23-dimensional-homogeneity" hreflang="en">英文参考：2.3 Dimensional Homogeneity</a>
- <span id="24-deriving-formulae-by-dimensional-analysis"></span><a href="/alevel/as-further-mathematics/#24-deriving-formulae-by-dimensional-analysis" hreflang="en">英文参考：2.4 Deriving Formulae by Dimensional Analysis</a>
- <span id="fm13-collisions-in-one-dimension"></span><a href="/alevel/as-further-mathematics/#fm13-collisions-in-one-dimension" hreflang="en">英文参考：FM1.3: Collisions in One Dimension</a>
- <span id="31-momentum"></span><a href="/alevel/as-further-mathematics/#31-momentum" hreflang="en">英文参考：3.1 Momentum</a>
- <span id="32-impulse"></span><a href="/alevel/as-further-mathematics/#32-impulse" hreflang="en">英文参考：3.2 Impulse</a>
- <span id="33-conservation-of-momentum"></span><a href="/alevel/as-further-mathematics/#33-conservation-of-momentum" hreflang="en">英文参考：3.3 Conservation of Momentum</a>
- <span id="34-newtons-experimental-law-coefficient-of-restitution"></span><a href="/alevel/as-further-mathematics/#34-newtons-experimental-law-coefficient-of-restitution" hreflang="en">英文参考：3.4 Newton’s Experimental Law (Coefficient of Restitution)</a>
- <span id="35-impact-with-a-fixed-surface"></span><a href="/alevel/as-further-mathematics/#35-impact-with-a-fixed-surface" hreflang="en">英文参考：3.5 Impact with a Fixed Surface</a>
- <span id="36-worked-example-two-particle-collision"></span><a href="/alevel/as-further-mathematics/#36-worked-example-two-particle-collision" hreflang="en">英文参考：3.6 Worked Example: Two-Particle Collision</a>
- <span id="key-formulae-summary"></span><a href="/alevel/as-further-mathematics/#key-formulae-summary" hreflang="en">英文参考：Key Formulae Summary</a>
- <span id="pure-mathematics"></span><a href="/alevel/as-further-mathematics/#pure-mathematics" hreflang="en">英文参考：Pure Mathematics</a>
- <span id="statistics"></span><a href="/alevel/as-further-mathematics/#statistics" hreflang="en">英文参考：Statistics</a>
- <span id="mechanics"></span><a href="/alevel/as-further-mathematics/#mechanics" hreflang="en">英文参考：Mechanics</a>

</details>
