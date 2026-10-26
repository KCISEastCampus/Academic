---
title: "关联检验：两个分类是否有关联"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: zh-CN
permalink: /zh/alevel/a2-further-mathematics/statistics/association-tests/
reading_layout: true
study_page: true
toc_headings: h2
translation_of: /alevel/a2-further-mathematics/statistics/association-tests/
---

关联检验问：一个分类变量的比例，是否随另一个分类变量而改变？所有示范和任务均自拟，数据为构造，不设官方分值。

需要先会频数表和假设检验逻辑。独立性不清楚时回补[独立与协方差](/zh/alevel/as-further-mathematics/linear-combinations/#covariance)：仅零协方差不能证明独立。

## 先确定独立观测 {#model}

每个独立抽取的对象按两个分类变量分类，恰好进入一格。原假设为这两个总体变量独立，备择为有关联；要写出两变量名称。同一对象重复作答，不能自动视为独立观测。

## 由行列总数建立期望表 {#expected}

无关联时，每行内的列比例相同。用整组样本估计列比例，再乘该行人数，得到此格期望频数。

$$
E_{ij}=R_i\frac{C_j}{N},\qquad
Q=\sum_{i=1}^r\sum_{j=1}^c\frac{(O_{ij}-E_{ij})^2}{E_{ij}},\qquad
\nu=(r-1)(c-1).
$$

$$
P(\chi^2_\nu\le c_\nu(u))=u.
$$

期望表必须还原原来的行列总数；合计不是新类别。前面的行列确定后，剩余格由固定边际决定，故自由度如上。每格期望频数严格大于5。偏离越大越反对独立，使用χ²上尾。

## 二乘二表的校正 {#yates}

本资格要求二乘二关联表作Yates连续性校正。先取残差绝对值，再减半、平方、除以期望频数。

$$
Q_Y=\sum_{i=1}^2\sum_{j=1}^2\frac{(\lvert O_{ij}-E_{ij}\rvert-0.5)^2}{E_{ij}},\qquad\nu=1.
$$

不要从带符号残差或原观察频数直接减半。校正不改变期望频数或自由度，也不能修复低期望频数或观测依赖。不将它推广到一般表或所有少类别拟合优度题。本页数值校正任务的绝对残差均大于半。

## 两个完整示范 {#examples}

<section class="worked-example" markdown="1">

### 完整示范 {#example-a}

**Question:** A random sample of 120 independent customers is classified by membership type A/B and product preference X/Y/Z. The observed rows are $(24,12,24)$ and $(16,28,16)$. Test for association at 5%, using $c_2(0.95)=5.991465$.

$$
H_0:\text{membership type and product preference are independent},\quad H_1:\text{they are associated}.
$$

| Membership | X | Y | Z | Total |
| --- | --- | --- | --- | --- |
| A | 24 | 12 | 24 | 60 |
| B | 16 | 28 | 16 | 60 |
| Total | 40 | 40 | 40 | 120 |

$$
E_{ij}=\frac{60\times40}{120}=20>5,\quad
Q=\frac{4^2+(-8)^2+4^2+(-4)^2+8^2+(-4)^2}{20}=9.6,
\quad\nu=(2-1)(3-1)=2,\quad9.6>5.991465.
$$

期望行和为60、列和为40，与边际一致。二乘三不作Yates。拒绝，有足够证据支持会员类型与偏好有关联；观察性资料不能证明会员类型导致偏好。

</section>

<section class="worked-example" markdown="1">

### 完整示范 {#example-b}

**Question:** Sixty independently sampled respondents are classified by training access A/B and confidence yes/no. The observed rows are $(18,12)$ and $(8,22)$. Test for association at 5%, using $c_1(0.95)=3.841459$.

$$
H_0:\text{training access and confidence are independent},\quad H_1:\text{they are associated}.
$$

| Access | Yes | No | Total |
| --- | --- | --- | --- |
| A | 18 | 12 | 30 |
| B | 8 | 22 | 30 |
| Total | 26 | 34 | 60 |

$$
E=\begin{pmatrix}13&17\\13&17\end{pmatrix},\quad
O-E=\begin{pmatrix}5&-5\\-5&5\end{pmatrix}.
$$

$$
Q_Y=2\frac{(5-0.5)^2}{13}+2\frac{(5-0.5)^2}{17}=5.497738,
\quad\nu=1,\quad5.497738>3.841459.
$$

每格期望频数大于5。拒绝，有足够证据支持培训机会与信心有关联。未校正值6.787330不能替代所需计算；关联不确定培训的因果效果。

</section>

## 自己选择并解释 {#practice}

<section class="lesson-check" markdown="1">

### 自己尝试 {#task-a}

**Question:** Ninety independently sampled items are classified by shift (early/middle/late) and status (pass/fail). Each shift has 30 items and observed rows $(18,12)$, $(12,18)$, $(6,?)$. Complete the table and assess association at 5%, using $c_2(0.95)=5.991465$. Does the result prove that shift causes defects?

<details markdown="1">

<summary>提示</summary>

先复原边际总数，再算期望值。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:\text{shift and status are independent},\quad H_1:\text{they are associated};
\quad ?=24,\quad C=(36,54),\quad N=90.
$$

$$
E=\begin{pmatrix}12&18\\12&18\\12&18\end{pmatrix},\quad
Q=\frac{36}{12}+\frac{36}{18}+0+0+\frac{36}{12}+\frac{36}{18}=10,
\quad\nu=(3-1)(2-1)=2,\quad10>5.991465.
$$

所有期望值大于5，三乘二不作Yates。拒绝，有足够证据支持班次与状态有关联；其他条件也可能随班次改变，因此不能推断班次造成缺陷。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#task-b}

**Question:** For the training-access table in Example B, a student uses $\sum(O-E-0.5)^2/E$ with signed residuals. Diagnose the error and give the correct statistic, degrees of freedom and conclusion without changing the table.

<details markdown="1">

<summary>提示</summary>

比较同样大小的正负残差。

</details>

<details markdown="1">

<summary>解答</summary>

$$
O-E=(5,-5,-5,5),\quad
\lvert O-E\rvert-0.5=(4.5,4.5,4.5,4.5),\quad
Q_Y=5.497738>3.841459,\quad\nu=1.
$$

先减半会把负偏差变为负五点五、正偏差变为四点五，对等大偏差不对称。应先取绝对值。拒绝，有足够证据支持培训机会与信心有关联；观察表本身不变。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#task-c}

**Question:** Two independent random groups yield observed rows $(9,1)$ and $(3,7)$. A student says Yates makes the chi-square approximation valid. Evaluate that claim. Separately, evaluate a survey that treats answers from each person before and after an event as two independent respondents.

<details markdown="1">

<summary>提示</summary>

分开检查期望值与独立抽样单位。

</details>

<details markdown="1">

<summary>解答</summary>

$$
R=(10,10),\quad C=(12,8),\quad N=20,\quad
E=\begin{pmatrix}6&4\\6&4\end{pmatrix}.
$$

期望值4不满足严格大于5，Yates不能修复，不能按此近似检验。另一调查中同一对象重复作答可存在依赖，不能当作不同独立受访者。两种描述都未满足所需条件。

</details>

</section>

## 按错因恢复后重试 {#retry}

期望频数或自由度错，回到[边际总数](#expected)；校正错，回到[绝对残差](#yates)，原观察表不动；条件不足，先找[抽样单位](#model)。收起旧答案再做新题。

<section class="lesson-check" markdown="1">

### 自己尝试 {#retry-a}

**Question:** Independent random respondents are classified by age band A/B and travel preference X/Y/Z. The observed rows are $(12,18,30)$ and $(18,12,30)$. Test for association at 5%, using $c_2(0.95)=5.991465$.

<details markdown="1">

<summary>提示</summary>

检查两组期望边际。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:\text{age band and travel preference are independent},\quad H_1:\text{they are associated};
\quad R=(60,60),\quad C=(30,30,60),\quad N=120.
$$

$$
E=\begin{pmatrix}15&15&30\\15&15&30\end{pmatrix},\quad
Q=\frac9{15}+\frac9{15}+0+\frac9{15}+\frac9{15}+0=2.4,
\quad\nu=2,\quad2.4<5.991465.
$$

所有期望值大于5，不用Yates。不拒绝，没有足够证据支持年龄组与出行偏好有关联；不等于证明独立。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#retry-b}

**Question:** Forty independently sampled people are classified by travel mode (bus/other) and study mode (group/alone), giving rows $(14,6)$ and $(7,13)$. Test for association at 5%, using $c_1(0.95)=3.841459$. A colleague obtains 4.912281; does that supply the required test?

<details markdown="1">

<summary>提示</summary>

先取残差绝对值，再减半。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:\text{travel mode and study mode are independent},\quad H_1:\text{they are associated};
\quad R=(20,20),\quad C=(21,19),\quad
E=\begin{pmatrix}10.5&9.5\\10.5&9.5\end{pmatrix}.
$$

$$
\lvert O_{ij}-E_{ij}\rvert=3.5,\quad
Q_Y=2\frac{(3.5-0.5)^2}{10.5}+2\frac{(3.5-0.5)^2}{9.5}=3.609023,
\quad\nu=1,\quad3.609023<3.841459.
$$

期望条件满足。不拒绝，没有足够证据支持出行方式与学习方式有关联。同事算的是未校正值，它会超过临界值；本题漏校正会改变结论。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#retry-c}

**Question:** An independent random sample classified by route A/B and package size small/medium/large gives rows $(8,1,1)$ and $(2,3,5)$. A grouping of small versus not-small was specified before seeing the table. Does this make expected counts valid under the strict rule? Calculate them and state what follows.

<details markdown="1">

<summary>提示</summary>

合并有意义，也要重新核对期望值。

</details>

<details markdown="1">

<summary>解答</summary>

$$
O_{\rm pooled}=\begin{pmatrix}8&2\\2&8\end{pmatrix},\quad
R=(10,10),\quad C=(10,10),\quad N=20,\quad E_{ij}=\frac{10\times10}{20}=5.
$$

不满足：期望值都恰为5，仍失败，不能给有依据的χ²结论。再合并会消除尺寸比较，应获取合适的更大独立样本，不强行下结论。

</details>

</section>

## 稍后收起示范再做 {#later-review}

<section class="lesson-check" markdown="1">

### 自己尝试 {#later-a}

**Question:** Sixty independently sampled people are classified by transport preference A/B and study mode group/alone, giving rows $(16,14)$ and $(9,21)$. Assess association at 5%, using $c_1(0.95)=3.841459$.

<details markdown="1">

<summary>提示</summary>

先看表维度，再选统计量。

</details>

<details markdown="1">

<summary>解答</summary>

$$
H_0:\text{transport preference and study mode are independent},\quad H_1:\text{they are associated};
\quad R=(30,30),\quad C=(25,35),\quad
E=\begin{pmatrix}12.5&17.5\\12.5&17.5\end{pmatrix}.
$$

$$
\lvert O_{ij}-E_{ij}\rvert=3.5,\quad
Q_Y=2\frac{3^2}{12.5}+2\frac{3^2}{17.5}=2.468571,
\quad\nu=1,\quad2.468571<3.841459.
$$

期望条件满足。不拒绝，没有足够证据支持交通偏好与学习方式有关联，不等于证明独立。

</details>

</section>

<section class="lesson-check" markdown="1">

### 自己尝试 {#later-b}

**Question:** Contrast (i) 80 independent die rolls classified by face and compared with six pre-specified face probabilities, and (ii) 80 independent people classified by die-colour preference and age category in a two-by-three table. State expected-count formulas and degrees of freedom. Does Yates apply to (ii)?

<details markdown="1">

<summary>提示</summary>

区分一个变量对模型与两个分类变量。

</details>

<details markdown="1">

<summary>解答</summary>

$$
\text{(i)}\quad E_i=80p_i,\quad\nu=6-1=5\quad\text{before pooling};
\qquad\text{(ii)}\quad E_{ij}=\frac{R_iC_j}{80},\quad\nu=(2-1)(3-1)=2.
$$

第一题为无拟合参数的拟合优度；第二题为关联，二乘三不作Yates。两者均要求最终期望值大于5；合理合组会改变类别和自由度。未给实际频数和具体概率，不能编造数值统计量。

</details>

</section>

[课程综合回顾](/zh/alevel/a2-further-mathematics/statistics/#review) · [课程路线](/zh/alevel/a2-further-mathematics/statistics/)
