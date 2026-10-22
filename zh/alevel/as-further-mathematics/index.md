---
title: AS 高等数学
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/
permalink: /zh/alevel/as-further-mathematics/
---

## 学习路线：FM01 与 FM02 {#learning-route}

这里是 OxfordAQA **9665 v5.2** 的学习路线：20 组课页覆盖 18 个 AS 主题。先阅读解释与示范，完成补步骤，再独立选法；提示与完整解答分别展开。根据错误反馈重新尝试。原英文长笔记保留作参考，阅读笔记不等于完成独立能力检查。

**先修：**FM01 假定普通 AS 数学的纯数内容；FM02 假定普通 AS 数学及 FP1。进入 FP1 前诊断代数、三角、微积分；进入 FM02 对应分支前诊断概率、随机变量、牛顿定律、动量。二维向量记号由 M1 直接教起，不预设已学归纳、De Moivre、三阶逆或特征值。

两单元均为 90 分钟、80 分，各占 AS 50%。FM02 在同一张试卷中分为**纯数 40／统计 20／力学 20**。精度及作答证据服从具体试卷和 command words；show 要论证，hence 要连接前问，sketch／plot 要相应图像证据。计算器可核对但不能代替这些步骤；本轮没有新增实机、考试模式或学生试用验证。

### 入口诊断 {#entry-diagnosis}

**Entry tasks (self-written):** (1) Factor $x^2-x-2$. (2) Solve $\sin\theta=1/2$ for $0\le\theta<2\pi$. (3) Differentiate $x^3$ and integrate $x^2$ from 0 to 2. (4) If $P(A)=0.4$ and $P(B\mid A)=0.2$, find $P(A\cap B)$. (5) A 2 kg particle changes velocity from −1 to 3 m s⁻¹; find its signed impulse.

<details markdown="1"><summary>诊断核对及修补路线</summary>

$$(x-2)(x+1);\quad \theta=\pi/6,5\pi/6;\quad 3x^2,8/3;\quad P(A\cap B)=0.08;\quad J=8\ \mathrm{N\,s}.$$

（1）错时先复习普通 AS 因式分解与二次理论再进 A1；（2）错先补单位圆再进 A3；（3）错先补幂函数微积分再进 A6/A7；（4）错先补条件概率再进 S1；（5）错先补带符号动量再进 M3。换一个例子重新检查后再推进。

</details>

### FM01 · FP1 {#route-a}

按先修关系走 A1 → A2、A3 → A4 及 A5 → A6 → A7。

- **A1 · FP1.1:** [有理函数：图像与值域](/zh/alevel/as-further-mathematics/rational-functions/)
- **A2 · FP1.1 FP1.2:** [圆锥曲线、轨迹与相切](/zh/alevel/as-further-mathematics/conics-and-loci/)
- **A3 · FP1.6:** [三角方程的完整通解](/zh/alevel/as-further-mathematics/trigonometric-solutions/)
- **A4 · FP1.3 FP1.4:** [复数、Argand 图与二次根](/zh/alevel/as-further-mathematics/complex-numbers-and-roots/)
- **A5 · FP1.5:** [有限和与无限级数极限](/zh/alevel/as-further-mathematics/series/)
- **A6 · FP1.7:** [从弦到变化率及近似](/zh/alevel/as-further-mathematics/rates-and-approximations/)
- **A7 · FP1.7:** [反常积分：收敛还是发散](/zh/alevel/as-further-mathematics/improper-integrals/)

### FM02 · 纯数 {#route-b}

B1 → B2；A6 支持 B4 → B5；B3 调用普通 AS 对数。

- **B1 · FPP1.1:** [矩阵运算与逆序](/zh/alevel/as-further-mathematics/matrix-algebra/)
- **B2 · FPP1.1:** [平面变换与一般不变直线](/zh/alevel/as-further-mathematics/transformations/)
- **B3 · FPP1.2:** [线性化、作图与拟合](/zh/alevel/as-further-mathematics/linearisation/)
- **B4 · FPP1.3:** [可追溯的数值求根](/zh/alevel/as-further-mathematics/numerical-roots/)
- **B5 · FPP1.3:** [Euler 更新及其局限](/zh/alevel/as-further-mathematics/euler-method/)

### FM02 · 统计 {#route-s}

S1 → S2/S3 → S4 → S5；用 PGF 时回看直接矩推导。

- **S1 · FS1.1:** [贝叶斯：改变样本空间](/zh/alevel/as-further-mathematics/bayes/)
- **S2 · FS1.2:** [离散均匀概率与矩](/zh/alevel/as-further-mathematics/discrete-uniform/)
- **S3 · FS1.3:** [几何分布与矩的推导](/zh/alevel/as-further-mathematics/geometric-distribution/)
- **S4 · FS1.4:** [概率生成函数](/zh/alevel/as-further-mathematics/generating-functions/)
- **S5 · FS1.5:** [线性组合与协方差](/zh/alevel/as-further-mathematics/linear-combinations/)

### FM02 · 力学 {#route-m}

M1 与 M2 建立 M3 所需记号及核验习惯。

- **M1 · FM1.1:** [向量、拦截与最近距离](/zh/alevel/as-further-mathematics/relative-motion/)
- **M2 · FM1.2:** [量纲、单位与模型局限](/zh/alevel/as-further-mathematics/dimensions/)
- **M3 · FM1.3:** [变力冲量与一维碰撞](/zh/alevel/as-further-mathematics/impulse-and-collisions/)

### 混合出口检查 {#exit-check}

以下均为自拟题。先不打开课页标题，独立选法并写出条件与理由，不只报数值。错误用于定位回学路线，不据此声称考试等级。

**Mixed tasks (self-written):** (1) Give the complete real solution of $\cos(2x)=1/2$ and decide whether $\int_1^\infty x^{-2}\,dx$ is finite. (2) A transformation is $\operatorname{diag}(3,1)$. Find its invariant lines, including any that miss the origin. (3) Independent X,Y have PGFs $(1+t)/2$ and $(t+t^2)/2$. Find $P(X+Y=2)$ and the variance of their sum. (4) Two particles have relative position $(4-t,3)$ m for $t\ge0$ s. Find their closest distance and explain whether they collide.

<details markdown="1"><summary>出口提示</summary>

（1）分别处理周期方程和端点极限；（2）保留截距并检查竖线；（3）匹配幂次，保留独立条件；（4）在允许时间内最小化模平方。

</details>

<details markdown="1"><summary>出口解答与回学路线</summary>

$$x=\pm\pi/6+n\pi\ (n\in\mathbb Z);\qquad\int_1^\infty x^{-2}\,dx=\lim_{R\to\infty}(1-1/R)=1.$$

（1）漏符号或截断极限时回 A3/A7；（2）所有 $y=k$ 及 $x=0$ 不变，仅 $x=0$ 逐点不动。漏非零截距时回 B2。

$$G_{X+Y}(t)=(t+2t^2+t^3)/4;\quad P(X+Y=2)=1/2;\quad\operatorname{Var}(X+Y)=1/4+1/4=1/2.$$

（3）漏交叉系数回 S4，方差错回 S5；（4）最近点在 $t=4$ s、距离 3 m，第二分量从不为零，所以不碰撞。时间错误或混淆路线相交与相遇时回 M1。

</details>

### 来源身份与参考笔记 {#course-sources}

范围依据 [9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) §§3.1–3.2。FM01 公开样卷正文为 **Specimen 2018 Morning**，文件名含 2019/v3，页脚版本不统一；官网配套样卷 MS 版权为 2017。它不是 2019 正式考季，也不是实考标准化后的 Final MS。FM02 依据为 **June 2024**、实际考试日 2024 年 5 月 16 日及 Version 1.0 Final MS。每课列出研究中实际读过的题号及 QP/MS 页。本轮新题均为自拟题，没有官方分值。

本路线尚未经学生试用。范围覆盖、计算正确或构建通过本身不能证明学习效果。

[英文长笔记（参考）](/alevel/as-further-mathematics/#reference-notes) · [A2 高数](/zh/alevel/a2-further-mathematics/)

## 英文旧笔记参考目录 {#reference-notes}

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
