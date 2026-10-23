---
title: "线性组合与协方差"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/linear-combinations/
permalink: /zh/alevel/as-further-mathematics/linear-combinations/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · S5 · FS1.5

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 带符号的系数为什么会被平方 {#model}

本课要推导组合方差，保留协方差项的符号，反求系数或矩，并区分独立与零相关。全课假定二阶矩有限。期望的线性关系不需要独立条件。

$$
\begin{aligned}
&E(aX+bY+c)=aE(X)+bE(Y)+c,\\
&X_c=X-E(X),\\
&Y_c=Y-E(Y),\\
&E(X_c)=E(Y_c)=0.
\end{aligned}
$$

先减去组合均值，常数 c 抵消；再展开离差平方并取期望。这样才能看清系数平方项及带符号的交叉项。

$$
\begin{aligned}
&(aX_c+bY_c)^2\\
&\quad=a^2X_c^2+b^2Y_c^2+2abX_cY_c,\\
&\operatorname{Var}(aX+bY+c)\\
&\quad=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)\\
&\qquad+2ab\operatorname{Cov}(X,Y).
\end{aligned}
$$

负系数在单独方差项中被平方，不会产生负的方差贡献；但它会改变交叉项的符号。常数改变均值，中心离差不变。

## 协方差、相关及其条件 {#covariance}

展开中心变量之积便得协方差公式。协方差是离差乘积的带符号平均，可以正、零或负。

$$
\begin{aligned}
&\operatorname{Cov}(X,Y)=E(X_cY_c)\\
&\quad=E(XY)-E(X)E(Y),\\
&V_X=\operatorname{Var}(X),\\
&V_Y=\operatorname{Var}(Y),\\
&C=\operatorname{Cov}(X,Y),\\
&\rho=\frac{C}{\sqrt{V_XV_Y}}\quad(V_X>0,\ V_Y>0).
\end{aligned}
$$

相关系数要求两个方差都为正。将离差标准化后，和平方与差平方的期望都非负，由此得到两侧限制：

$$
\begin{aligned}
&E\left[\left(\frac{X_c}{\sqrt{V_X}}
+\frac{Y_c}{\sqrt{V_Y}}\right)^2\right]=2+2\rho\ge0,\\
&E\left[\left(\frac{X_c}{\sqrt{V_X}}
-\frac{Y_c}{\sqrt{V_Y}}\right)^2\right]=2-2\rho\ge0,\\
&-1\le\rho\le1,\\
&C^2\le V_XV_Y.
\end{aligned}
$$

独立可分解联合期望，因此推出协方差零；反向一般不成立。对称变量可能与自身平方不相关，但平方仍由该变量决定。后面的任务将用联合事件验证。X 若为常量，协方差为零，但相关系数因分母为零而无定义。

多个独立变量的协方差项全为零，组合方差按系数平方相加。两两协方差零也足以作这项方差计算，却不能因此断言独立。若中心矩不熟悉，回补[离散均匀推导](/zh/alevel/as-further-mathematics/discrete-uniform/#demonstration)。

## 示范：从有关联的联合表计算 {#demonstration}

<section class="worked-example" markdown="1">

这是构造的联合分布，不是实测数据。行为 X、列为 Y；先求边缘分布，两变量都以一半概率取零或一。

| $P(X=x,Y=y)$ | $y=0$ | $y=1$ |
| --- | --- | --- |
| $x=0$ | 0.4 | 0.1 |
| $x=1$ | 0.1 | 0.4 |

$$
\begin{aligned}
&E(X)=E(Y)=0.5,\\
&E(X^2)=E(Y^2)=0.5,\\
&V_X=V_Y=0.5-0.5^2=0.25,\\
&E(XY)=1(1)(0.4)=0.4,\\
&C=0.4-0.5(0.5)=0.15,\\
&\rho=\frac{0.15}{0.25}=0.6.
\end{aligned}
$$

只有 (1,1) 格对 XY 有贡献。对角概率较大对应正协方差。代数值前先写带符号系数。

$$
\begin{aligned}
&\operatorname{Var}(X-Y)\\
&\quad=0.25+0.25-2(0.15)=0.2,\\
&E(2X-Y+3)=2(0.5)-0.5+3=3.5,\\
&\operatorname{Var}(2X-Y+3)\\
&\quad=4(0.25)+0.25-4(0.15)\\
&\quad=1+0.25-0.6=0.65.
\end{aligned}
$$

直接核对：X−Y 以 0.1、0.8、0.1 概率取 −1、0、1，方差为 0.2。表格四格对应 2X−Y+3 的值为 3、2、5、4，相对 3.5 的加权离差平方和为 0.65。误当独立会把差方差算成 0.5。

</section>

## 反求之后还要检查相容性 {#bounds}

<section class="worked-example" markdown="1">

**Demonstration (self-written):** X,Y have variances 1 and 4, and Var(X−Y)=3. Recover their covariance and check its admissibility.

先由差方差反求 C，检查范围后才能用到新组合。

$$
\begin{aligned}
&3=1+4-2C,\\
&C=1,\\
&\rho=\frac1{\sqrt{1(4)}}=\frac12.
\end{aligned}
$$

若同样两方差下差方差报为 10，会要求 C=−2.5、相关 −1.25，不可能。仅看所报方差非负还不够。一般有：

$$
\begin{aligned}
&(\sqrt{V_X}-\sqrt{V_Y})^2\\
&\quad\le\operatorname{Var}(X-Y)\\
&\quad\le(\sqrt{V_X}+\sqrt{V_Y})^2.
\end{aligned}
$$

把 C 的最大、最小合法值代入即可得边界。反求系数时保留其符号，解二次方程后按题目符号限制选根；代回原方差核验，再单独求均值。

</section>

## 分清复用、组合与反求 {#practice}

<section class="lesson-check" id="scaffold" markdown="1">

**Scaffold (self-written):** If $\operatorname{Var}(U)=v$ and $U_1,U_2$ are independent copies of U, compare $\operatorname{Var}(2U)$ with $\operatorname{Var}(U_1+U_2)$.

比较同一随机结果重复两次与两个独立副本相加。

<details markdown="1"><summary>提示</summary>

独立副本与同一结果重复相加不同。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&\operatorname{Var}(2U)=4v,\\
&\operatorname{Var}(U_1+U_2)=2v.
\end{aligned}
$$

U+U 的协方差为 v，独立副本之间的协方差为零。

</details>

</section>

<section class="lesson-check" id="practice-1" markdown="1">

**Independent task (self-written):** Discrete X,Y have means 2, −1, variances 4, 9 and $\operatorname{Var}(X-Y)=7$. Find their covariance, correlation, and the mean and variance of $Z=3X-2Y+5$. Could the difference variance instead be 30 with the same individual variances? Also find $\operatorname{Var}(2U-V+W)$ for independent U,V,W with variances 1,4,9.

处理负系数、反求协方差、可行性与多变量独立组合。

<details markdown="1"><summary>提示</summary>

先由差反求协方差，再用相关界检验替代报告。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&7=4+9-2C,\\
&C=3,\\
&\rho=\frac3{\sqrt{4(9)}}=\frac12,\\
&E(Z)=3(2)-2(-1)+5=13,\\
&\operatorname{Var}(Z)\\
&\quad=9(4)+4(9)-12(3)=36,\\
&30=13-2C\ \Rightarrow\ C=-8.5,\\
&\rho=-8.5/6<-1\quad\text{(impossible)},\\
&\operatorname{Var}(2U-V+W)\\
&\quad=4(1)+4+9=17.
\end{aligned}
$$

此处差方差合法范围为 1 到 25，故 30 本身已不合法，与后来求 Z 无关。

</details>

</section>

<section class="lesson-check" id="practice-2" markdown="1">

**Independent task 2 (self-written):** X,Y have means 2,−1, variances 4,9 and covariance 3. For L=aX+Y+1, a is negative and Var(L)=13. Recover a, its mean and its second raw moment. Verify the signed covariance contribution and explain whether independence is required.

反求负系数，再由方差和均值恢复二阶原点矩。

<details markdown="1"><summary>提示</summary>

先列含 a 的二次方程，再按负号条件选根。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&13=4a^2+9+6a,\\
&4a^2+6a-4=0,\\
&(2a-1)(2a+4)=0,\\
&a=\frac12\text{ or }-2,\\
&a<0\Rightarrow a=-2,\\
&E(L)=-2(2)-1+1=-4,\\
&\operatorname{Var}(L)=16+9-12=13,\\
&E(L^2)=13+(-4)^2=29.
\end{aligned}
$$

交叉项为 2aC=6a，所选根处为 −12。不需要独立，计算明确保留非零协方差；给定相关为 1/2，范围合法。

</details>

</section>

<section class="lesson-check" id="practice-3" markdown="1">

**Independent task 3 (self-written):** X is equally likely to be −2,−1,1,2 and Y=X². Compute the covariance and correlation, checking that correlation exists. Decide whether X,Y are independent by comparing a joint probability with the product of its marginals. Explain what this says about zero correlation.

独立算矩与联合事件，不能把协方差零当作独立证明。

<details markdown="1"><summary>提示</summary>

奇次乘积因对称抵消，但独立仍须检验联合事件。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&E(X)=0,\\
&E(Y)=\frac{1+1+4+4}4=\frac52,\\
&E(XY)=\frac{-8-1+1+8}4=0,\\
&C=0,\\
&V_X=\frac52,\\
&E(Y^2)=\frac{1+1+16+16}4=\frac{17}2,\\
&V_Y=\frac{17}2-\frac{25}4=\frac94,\\
&\rho=0,\\
&P(X=2,Y=4)=\frac14,\\
&P(X=2)P(Y=4)\\
&\quad=\frac14\frac12=\frac18.
\end{aligned}
$$

两方差都正，零相关有定义；联合概率与边缘概率乘积不同，所以虽不相关，仍不独立。

</details>

</section>

## 针对遗漏的条件再试 {#retry}

漏符号时先写交叉项再做重试 2；相关分母出错时做重试 1；可行性判断出错时先回看边界论证，再独立完成[可行性重试](#retry-feasibility)，包括构造合法边界例；仅凭协方差判独立时，用明确联合事件做重试 3。

<section class="lesson-check" id="retry-1" markdown="1">

**Retry (self-written):** With variances 4 and 9 but covariance −2, find $\operatorname{Var}(X+Y)$ and correlation. Can correlation be computed if X is constant?

处理负协方差，并判断常量变量能否定义相关系数。

<details markdown="1"><summary>提示</summary>

相除前先检查两方差都为正。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&\operatorname{Var}(X+Y)=4+9+2(-2)=9,\\
&\rho=\frac{-2}{\sqrt{4(9)}}=-\frac13.
\end{aligned}
$$

X 恒定时方差为零，即使协方差为零，相关系数仍无定义。

</details>

</section>

<section class="lesson-check" id="retry-feasibility" markdown="1">

**Feasibility retry (self-written):** X,Y have variances 4 and 9. Could their covariance be 6? Could it be 7? Justify each conclusion. For any admissible value among these two, construct a discrete joint distribution with two equally likely outcomes that realises it.

分别检验边界值与越界值，并为合法值构造实际联合分布。

<details markdown="1"><summary>提示</summary>

相关边界上的值可以成立，越界值不能靠改变均值来修补。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&\sqrt{V_XV_Y}=\sqrt{4(9)}=6,\\
&C=6:\quad \rho=1,\\
&C=7:\quad \rho=\frac76>1,\\
&P(X=2,Y=3)=\frac12,\\
&P(X=-2,Y=-3)=\frac12,\\
&E(X)=E(Y)=0,\\
&V_X=4,\qquad V_Y=9,\\
&E(XY)=6,\qquad C=6.
\end{aligned}
$$

所列两个联合结果实现协方差 6；协方差 7 会使相关超过一，不可能。既要排除越界报告，也要给出边界可实现的证据。

</details>

</section>

<section class="lesson-check" id="retry-2" markdown="1">

**Retry 2 (self-written):** X,Y have means 2,−1, variances 4,9 and covariance −2. T=2X+bY−2 has negative b and variance 33. Recover b, the mean and second raw moment of T. Explain the sign of its covariance contribution.

更换协方差符号后反求负系数，检查交叉项为何变正。

<details markdown="1"><summary>提示</summary>

交叉项为 2(2)b(−2)，不能把协方差平方。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&33=16+9b^2-8b,\\
&9b^2-8b-17=0,\\
&(b+1)(9b-17)=0,\\
&b=-1\text{ or }\frac{17}9,\\
&b<0\Rightarrow b=-1,\\
&E(T)=2(2)+(-1)(-1)-2=3,\\
&\operatorname{Var}(T)=16+9+8=33,\\
&E(T^2)=33+3^2=42.
\end{aligned}
$$

b 与协方差都负，交叉项反而为正 8；相关 −1/3 也合法。

</details>

</section>

<section class="lesson-check" id="retry-3" markdown="1">

**Retry 3 (self-written):** U is uniform on −2,−1,0,1,2 and V=U². Determine whether correlation exists, calculate it and test independence using the event U=0,V=0.

先检查相关是否有定义，再用指定联合事件检验独立性。

<details markdown="1"><summary>提示</summary>

先算出两方差为正，再解释零协方差。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&E(U)=0,\\
&E(V)=2,\\
&E(UV)=0,\\
&V_U=2,\\
&E(V^2)=\frac{34}5,\\
&V_V=\frac{34}5-4=\frac{14}5,\\
&C=0,\\
&\rho=0,\\
&P(U=0,V=0)=\frac15,\\
&P(U=0)P(V=0)=\frac1{25}.
\end{aligned}
$$

相关有定义且为零，但联合概率不等于乘积，故不独立。

</details>

</section>

## 学完下一章后再回来 {#later-review}

<section class="lesson-check" id="later-task" markdown="1">

**Later review (self-written):** X,Y have means 1,2. Their sum has variance 25 and their difference variance 9. The variance of Y is twice that of X plus 2. Recover both variances, covariance and correlation, and check consistency. Find E(XY), and the mean, variance and second raw moment of R=2X−3Y+1. Do not assume independence.

延后反求整组矩，再处理新的负系数组合。

<details markdown="1"><summary>提示</summary>

先把和、差的方差方程相加相减，再用个体方差关系。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$
\begin{aligned}
&25=V_X+V_Y+2C,\\
&9=V_X+V_Y-2C,\\
&V_X+V_Y=17,\\
&C=4,\\
&V_Y=2V_X+2\ \Rightarrow\ V_X=5,\ V_Y=12,\\
&\rho=\frac4{\sqrt{60}}=\frac2{\sqrt{15}},\\
&E(XY)=4+1(2)=6,\\
&E(R)=2(1)-3(2)+1=-3,\\
&\operatorname{Var}(R)=4(5)+9(12)-12(4)\\
&\quad=80,\\
&E(R^2)=80+9=89.
\end{aligned}
$$

两方差为正且 C²=16≤60，矩数据通过协方差界；非零协方差排除独立。

</details>

</section>

## 决定下一步 {#next-step}

能反求负系数、检验协方差并解释零相关不足以判独立后，再学相对运动。带符号代入出错时重做中心平方展开与重试 2；相关出错时先查方差再做重试 1。学完下一章后不看笔记做延后回顾，也返回 [PGF 混合回顾](/zh/alevel/as-further-mathematics/generating-functions/#later-review)，连接独立和方差与 PGF 导数。

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.5.
- FM02 June 2024 Q8(b)(ii); QP p.17, MS p.15. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/generating-functions/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/relative-motion/)
