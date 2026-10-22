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
---

[AS 高数课程](/zh/alevel/as-further-mathematics/) · S5 · FS1.5

本页示范、补步骤、独立任务及再尝试均为**自拟题（self-written）**，没有官方分值。先写方法与理由，再分别展开提示和解答。题干保留英文，中文说明帮助建立推理。

## 系数为什么要平方？ {#model}

**开始：**比较重复使用同一个随机值与重新独立抽一个值。**目标：**推导线性组合方差，保留协方差符号，反求相关并检查一致性。假定二阶矩有限；相关系数要求两方差均为正。期望线性不需要独立。

$$E(aX+bY+c)=aE(X)+bE(Y)+c.$$

设 $X_c=X-E(X)$、$Y_c=Y-E(Y)$，展开平方再取期望，便可看清交叉项，不能直接删掉。

$$E[(aX_c+bY_c)^2]=a^2E(X_c^2)+b^2E(Y_c^2)+2abE(X_cY_c).$$

$$\operatorname{Var}(aX+bY+c)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)+2ab\operatorname{Cov}(X,Y).$$

$$\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y),\qquad
\rho=\frac{\operatorname{Cov}(X,Y)}{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}},\quad -1\le\rho\le1.$$

独立推出协方差零；协方差零一般不能反推独立。常数改变均值，不改变方差。多个独立变量的组合方差按系数平方相加。

## 示范：有关联的联合表 {#demonstration}

这是构造的联合分布；行为 X、列为 Y。对角概率较大，使两变量更常相等。

| $P(X=x,Y=y)$ | $y=0$ | $y=1$ |
| --- | --- | --- |
| $x=0$ | 0.4 | 0.1 |
| $x=1$ | 0.1 | 0.4 |

$$E(X)=E(Y)=0.5,\quad\operatorname{Var}(X)=\operatorname{Var}(Y)=0.25;\quad E(XY)=0.4\Rightarrow\operatorname{Cov}(X,Y)=0.15,\ \rho=0.6.$$

$$\operatorname{Var}(X-Y)=0.25+0.25-2(0.15)=0.2;\qquad E(2X-Y+3)=3.5,\quad\operatorname{Var}(2X-Y+3)=1+0.25-0.6=0.65.$$

负系数使协方差项变号；若错误当成独立，差的方差就会误算为 0.5。

## 补步骤与独立选法 {#practice}

**Scaffold (self-written):** If $\operatorname{Var}(U)=v$ and $U_1,U_2$ are independent copies of U, compare $\operatorname{Var}(2U)$ with $\operatorname{Var}(U_1+U_2)$.

<details markdown="1"><summary>补步骤核对</summary>

$$\operatorname{Var}(2U)=4v;\qquad\operatorname{Var}(U_1+U_2)=2v.$$

$U+U$ 的协方差为 v；独立副本协方差才是零。

</details>

**Independent task (self-written):** Discrete X,Y have means 2, −1, variances 4, 9 and $\operatorname{Var}(X-Y)=7$. Find their covariance, correlation, and the mean and variance of $Z=3X-2Y+5$. Could the difference variance instead be 30 with the same individual variances? Also find $\operatorname{Var}(2U-V+W)$ for independent U,V,W with variances 1,4,9.

<details markdown="1"><summary>提示</summary>

先由差反求协方差，再处理 Z；替代数据要检查 $\lvert\rho\rvert\le1$，不只看方差是否非负。

</details>

<details markdown="1"><summary>解答与核对</summary>

$$7=4+9-2C\Rightarrow C=3,\quad\rho=3/6=1/2.$$

$$E(Z)=3(2)-2(-1)+5=13;\qquad\operatorname{Var}(Z)=9(4)+4(9)-12(3)=36.$$

$$30=13-2C\Rightarrow C=-8.5,\quad\rho=-8.5/6<-1\quad\text{(impossible)}.$$

$$\operatorname{Var}(2U-V+W)=4(1)+4+9=17.$$

</details>

## 诊断与再尝试 {#retry}

漏负号通常源于未明确 a、b 就代数；先写 $2abC$，再代入带符号系数。

**Retry (self-written):** With variances 4 and 9 but covariance −2, find $\operatorname{Var}(X+Y)$ and correlation. Can correlation be computed if X is constant?

<details markdown="1"><summary>再尝试核对</summary>

$$\operatorname{Var}(X+Y)=4+9-4=9,\qquad\rho=-2/6=-1/3.$$

常量 X 方差为零，相关系数无定义。

</details>

## 来源与范围 {#sources}

本课范围按 9665 v5.2；以下已读原题及配套评分材料用于设计作答证据，本页练习不是原题复制或官方评分标准。

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.5.
- FM02 June 2024 Q8(b)(ii); QP p.17, MS pp.14–15. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[上一课](/zh/alevel/as-further-mathematics/generating-functions/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/relative-motion/)
