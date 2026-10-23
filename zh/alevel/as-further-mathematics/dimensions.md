---
title: "量纲、单位与模型局限"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: zh-CN
translation_of: /alevel/as-further-mathematics/dimensions/
permalink: /zh/alevel/as-further-mathematics/dimensions/
toc_headings: "#start, #model, #demonstration, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS 高数课程](/zh/alevel/as-further-mathematics/)

单位能否排除一个公式？能否反过来确定规律？本页先从定义建立量纲，再在明确的模型假设下求指数，最后区分“必须通过的检查”与“模型符合现实的证据”。

本页示范与练习均为**自拟题（self-written）**，没有官方分值。先读概念与完整示范，再独立尝试；每题的提示与解答分别默认关闭。保留英文题干，中文帮助理解和订正。

## 开始前 {#start}

先修是指数运算、简单联立方程，以及速度、加速度、力和功的定义。若指数相除不熟练，先回补 [AS 代数](/zh/alevel/as-mathematics/algebra/#l01)。下面只用已有定义，不要求预先知道量纲分析。

<section class="lesson-check" markdown="1">

### 先修检查 {#entry-check}

**Entry check (self-written):** Velocity has SI unit m s⁻¹. Use acceleration as change of velocity per time, and force as mass times acceleration, to derive their SI base units. Write the base units of force divided by area.

从速度出发逐步求加速度、力和力除以面积的单位；注意面积贡献两个长度因子。

<details markdown="1"><summary>提示</summary>

加速度要再除一次秒；面积的单位是平方米。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}{}[a]_{\rm SI}&=\mathrm{m\,s^{-2}},\\{}[F]_{\rm SI}&=\mathrm{kg\,m\,s^{-2}},\\{}[F/A]_{\rm SI}&=\mathrm{kg\,m^{-1}\,s^{-2}}.\end{aligned}$$

下标 SI 在这里表示单位表达式，不是量纲。末行若得到米而非米的负一次方，先明确写出面积的除数，再相减指数；收起解答重新完成这条链。

</details>

</section>

## 1. 量纲描述物理量的类型 {#model}

单位规定测量尺度：米与厘米都测长度。量纲撇开尺度，记录物理量的类型。用 M、L、T 分别表示质量、长度、时间量纲，方括号表示“取量纲”。速率无论用米每秒还是千米每小时表示，都有 $[v]=LT^{-1}$。这些字母不是某个物体的质量、长度和时间数值。

相乘时量纲相乘，相除时指数相减，乘方时指数相乘。相加或相等的量必须具有相同量纲。纯数的量纲为 1，但用字母表示的系数不一定无量纲。

### 把量纲与单位连起来 {#units}

| 物理量 | 定义关系 | 量纲 | SI 单位 |
| --- | --- | --- | --- |
| 速度 | 位移／时间 | $LT^{-1}$ | m s⁻¹ |
| 加速度 | 速度变化／时间 | $LT^{-2}$ | m s⁻² |
| 力 | 质量 × 加速度 | $MLT^{-2}$ | N |
| 动量／冲量 | 质量 × 速度／力 × 时间 | $MLT^{-1}$ | kg m s⁻¹ / N s |
| 能量 | 力 × 距离 | $ML^2T^{-2}$ | J |
| 功率 | 能量／时间 | $ML^2T^{-3}$ | W |
| 压强 | 力／面积 | $ML^{-1}T^{-2}$ | Pa |
| 密度 | 质量／体积 | $ML^{-3}$ | kg m⁻³ |

功的定义取沿位移方向的力分量，量纲仍是力乘长度。SI 专名是缩写：牛顿就是千克米每二次方秒，帕斯卡就是牛顿每平方米。量纲一致后，数值代入仍需先统一单位。

## 2. 先检查公式，再推断指数 {#demonstration}

<section class="worked-example" markdown="1">

### 压强的两种描述 {#pressure}

**Demonstration (self-written):** Pressure P is normal force per area. A proposed pressure difference is $P=\rho gh$, where ρ is density, g is acceleration and h is depth. Check dimensions and SI units. Does this establish the law?

从力除以面积建立左边，再逐项检查右边；最后判断这种检查能支持什么结论。

从定义出发：面积在分母贡献长度的平方。

$$\begin{aligned}{}[P]&=\frac{MLT^{-2}}{L^2}\\&=ML^{-1}T^{-2}.\end{aligned}$$

再把右边每个因子的量纲相乘，实际检验这个组合。

$$\begin{aligned}{}[\rho gh]&=(ML^{-3})(LT^{-2})(L)\\&=ML^{-1}T^{-2}=[P].\end{aligned}$$

$$\begin{aligned}&(\mathrm{kg\,m^{-3}})(\mathrm{m\,s^{-2}})(\mathrm m)\\&\quad=\mathrm{kg\,m^{-1}\,s^{-2}}.\end{aligned}$$

量纲与 SI 单位都相符。这是公式表示压强的必要条件，但 $2\rho gh$ 同样通过。检查没有建立流体静止、密度恒定、重力加速度均匀等假设，也没有确定压强参考值或数值系数；这些需要物理模型或证据。

</section>

推指数之前，要明确全部有量纲变量以及关系的形式。遗漏变量，或允许系数带量纲，都可能改变结果。下面的推断以幂乘积形式及无量纲 K 为前提。

<section class="worked-example" markdown="1">

### 在假定模型下求周期

**Demonstration (self-written):** Assume a pendulum period τ has form $K\ell^ag^bm^c$, with dimensionless K and no other dimensional variables. Find the powers.

左边只有时间量纲，质量与长度的指数都为零；右边展开后分别配平三个指数。

$$\begin{aligned}T&=L^a(LT^{-2})^bM^c\\&=M^cL^{a+b}T^{-2b},\\c&=0,\\a+b&=0,\\-2b&=1.\end{aligned}$$

先由时间方程得到 b，再由长度方程得到 a；质量指数必须为零。

$$\begin{aligned}a&=\tfrac12,\quad b=-\tfrac12,\quad c=0,\\\tau&=K\sqrt{\ell/g}.\end{aligned}$$

核对 $[\ell/g]=T^2$，开方后确为时间。在这个模型内，单独改变质量不改变周期，并假定长度与重力加速度为正。K 仍无法确定，也可能随无量纲振幅变化。小振幅摆理论才会给出某个具体 K；量纲配平本身没有建立小振幅近似。

</section>

### 检查通过后仍有哪些未知 {#model-limits}

在定义明确时，MLT 不一致能排除表达式；一致却不能选出唯一规律、求出纯数倍数，或证明变量清单完整。功与力矩都有力乘长度的量纲，量纲也不能把它们当成同一种量。若指数方程无解，失败的是所假定的形式或变量清单；乘一个纯数不能补上缺失的量纲。

## 3. 自己建立并检验表达式 {#practice}

<section class="lesson-check" markdown="1">

### 求未知系数 {#scaffold-G}

**Scaffold (self-written):** If a gravitational force is modelled as $F=Gm_1m_2/r^2$, derive dimensions and SI units of G.

保留两份质量和距离平方，先把系数单独解出来。

<details markdown="1"><summary>提示</summary>

先移项求 G，再取量纲；两份质量各贡献一个 M。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}{}[G]&=\frac{[F]L^2}{M^2}\\&=M^{-1}L^3T^{-2},\\\text{SI unit}&:\ \mathrm{m^3\,kg^{-1}\,s^{-2}}.\end{aligned}$$

把结果乘两份质量、除距离平方，会还原力的量纲。若把 G 默认当纯数，回看[量纲与单位](#units)，再做[系数重试](#retry-coefficient)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 比较两种提案 {#practice-1}

**Independent task (self-written):** In a linear resistance model $F=kv$, find the dimensions and SI units of k. A competing model is $F=C\rho A v^2$, where A is area and C is dimensionless. Check it, predict the force factor when v doubles with other variables fixed, and explain why the check cannot select the true model. Is $F=kv+1$ dimensionally valid if 1 is a pure number?

自行求系数、检验竞争模型、比较速度加倍的后果，并说明为什么不能据此选出真实规律；也要判断加上纯数是否合法。

<details markdown="1"><summary>提示</summary>

求 k 用相除，检验竞争模型用相乘。模型内部的倍数预测与支持模型的实证是两回事。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}{}[k]&=\frac{MLT^{-2}}{LT^{-1}}=MT^{-1},\\\text{SI unit}&:\ \mathrm{kg\,s^{-1}},\\{}[C\rho Av^2]&=(ML^{-3})(L^2)(L^2T^{-2})\\&=MLT^{-2}.\end{aligned}$$

二次模型预测变为 4 倍，线性模型预测变为 2 倍。两者量纲都一致，要由适用条件与观测判断。纯数 1 不能与力相加；若是带力单位的常量，则是另一种陈述。若误把一致当成证明，回看[局限](#model-limits)，学完下一页后做[延后回顾](#later-review)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 波速模型 {#practice-2}

**Independent task (self-written):** A string has tension S (a force) and linear density μ (mass per length). Assume its wave speed is $c=KS^a\mu^b$, with dimensionless K and no other dimensional variables. Derive a and b, state the SI units of μ, and explain what remains undetermined.

把张力与线密度转换成量纲，再独立配平指数；说明得到的关系还缺少什么。

<details markdown="1"><summary>提示</summary>

从“单位长度的质量”求线密度量纲，然后分别配平 M、L、T。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}{}[\mu]&=ML^{-1},\\\text{SI unit}&:\ \mathrm{kg\,m^{-1}},\\LT^{-1}&=M^{a+b}L^{a-b}T^{-2a},\\a+b&=0,\\a-b&=1,\\-2a&=-1,\\a&=\tfrac12,\quad b=-\tfrac12,\\c&=K\sqrt{S/\mu}.\end{aligned}$$

张力与线密度为正时，根号内量纲是速率平方。K 以及所列变量能否充分描述实际系统仍未确定。若只配平时间，补查另外两个方程；回看[周期示范](#demonstration)，再独立做[时间尺度重试](#retry-timescale)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 判断一个假设 {#practice-3}

**Independent task (self-written):** A proposed timescale uses only mass m and length ℓ: $\tau=Km^a\ell^b$, with dimensionless K. Can any real exponents a and b make it dimensionally consistent? Justify your answer for all a and b.

对所有实数指数作出有依据的判断，不能只试几个数。

<details markdown="1"><summary>提示</summary>

无论 a、b 怎样选择，右边的时间指数是多少？

</details>

<details markdown="1"><summary>解答与回补</summary>

$$T=M^aL^bT^0.$$

等式要求时间指数 1 与 0 相同，因此对任何 a、b 都不可能。纯数 K 不能补救。这排除的是题设模型，并非所有时间尺度；增加变量或允许系数带量纲可能改变结论。回补[模型局限](#model-limits)，再试[另一份变量清单](#retry-missing-variable)。

</details>

</section>

## 4. 针对错误重新尝试 {#retry}

按错误选择重试，收起先前解答，重新写推理链；照抄改正后的指数还不算独立核验。

<section class="lesson-check" markdown="1">

### 另一种时间尺度 {#retry-timescale}

**Retry (self-written):** A timescale is assumed to depend only on a length ℓ and a speed v through $K\ell^av^b$. Find a,b and say whether K is determined.

重新配平，不套用摆周期的指数。

<details markdown="1"><summary>提示</summary>

速度本身也含时间量纲。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}T&=L^{a+b}T^{-b},\\a+b&=0,\quad -b=1,\\a&=1,\quad b=-1,\\\tau&=K\ell/v.\end{aligned}$$

K 无法由量纲确定。正长度与正速率之比的单位是秒。若仍出错，先把两个指数分别写成方程，再回看[周期示范](#demonstration)。

</details>

</section>

<section class="lesson-check" markdown="1">

### 检查系数声明 {#retry-coefficient}

**Retry (self-written):** A resistance force is written $R=D\rho v^2$. Density ρ and speed v have their usual meanings. Determine the dimensions and SI units required for D. Assess the claim that D is dimensionless.

判断缺失的因子应由系数提供什么量纲。

<details markdown="1"><summary>提示</summary>

比较力与密度乘速率平方的量纲。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}{}[\rho v^2]&=ML^{-1}T^{-2},\\{}[D]&=\frac{MLT^{-2}}{ML^{-1}T^{-2}}=L^2,\\\text{SI unit}&:\ \mathrm{m^2}.\end{aligned}$$

D 必须有面积量纲；若声称无量纲，题设表达式就不能表示力。若算成 1，回看[压强示范](#pressure)，区分力与压强。

</details>

</section>

<section class="lesson-check" markdown="1">

### 另一份变量清单 {#retry-missing-variable}

**Retry (self-written):** A timescale is proposed as $\tau=Km^aF^b$, using only mass m and force F, with dimensionless K. Decide whether it can work and prove your conclusion by matching exponents.

这次右边确实有时间量纲，但要同时满足全部指数条件。

<details markdown="1"><summary>提示</summary>

长度与时间指数都由 b 决定，两个条件能否同时满足？

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}T&=M^{a+b}L^bT^{-2b},\\b&=0\quad\text{from L},\\-2b&=1\quad\text{from T}.\end{aligned}$$

末两个条件矛盾，所以不存在可行实数 a、b。右边出现时间因子还不够，所有量纲必须同时满足。若只看时间就接受模型，重新做[独立任务 3](#practice-3)。

</details>

</section>

## 延后回顾 {#later-review}

学完[冲量与碰撞](/zh/alevel/as-further-mathematics/impulse-and-collisions/)后回到这里。收起两页示范，自行判断需要哪些关系。

<section class="lesson-check" markdown="1">

### 判断一种捷径 {#review-task}

**Later review (self-written):** A net force is $F(t)=At+Bt^2$ for $0\le t\le\Delta t$. Determine the dimensions and SI units of A and B. A student proposes $J=\Delta t\,F(\Delta t)$ for the impulse. Is this dimensionally consistent, and is it always correct? Obtain the impulse and test the claim when A is 2 N s⁻¹, B is zero and the duration is 3 s.

先求两个系数的量纲，再评价捷径；用推导和给定数值分别作证据。

<details markdown="1"><summary>提示</summary>

每项都要具有力的量纲；末时刻的力不等于全过程的力。

</details>

<details markdown="1"><summary>解答与回补</summary>

$$\begin{aligned}{}[A]&=MLT^{-3},\quad\text{SI}:\ \mathrm{N\,s^{-1}},\\{}[B]&=MLT^{-4},\quad\text{SI}:\ \mathrm{N\,s^{-2}},\\J&=\int_0^{\Delta t}(At+Bt^2)\,dt\\&=\tfrac12 A(\Delta t)^2+\tfrac13 B(\Delta t)^3.\end{aligned}$$

所提乘积确有冲量量纲，但把变化的力当成了末时刻的恒力。给定数据下，捷径得到 18 N s，积分得到 9 N s；一个反例足以否定“总是正确”，而两个表达式都通过量纲检查。恒力才可直接用这个矩形面积公式。

若单位出错，回补[量纲与单位](#units)及[系数重试](#retry-coefficient)；若从单位推出正确性，回看[模型局限](#model-limits)。积分不熟则回到[下一页的冲量积分](/zh/alevel/as-further-mathematics/impulse-and-collisions/#impulse)。

</details>

</section>

## 下一步 {#next-step}

用自己的话解释“为什么量纲正确不能证明规律”，然后进入[冲量与碰撞](/zh/alevel/as-further-mathematics/impulse-and-collisions/)。那里除了力、时间与动量的量纲相符，还要检查方向和系统选择。记录哪些重试用过提示，并在学完后回来做延后回顾。

## 来源与范围 {#sources}

范围为 OxfordAQA 9665 v5.2、FM1.2，不迁移到 9765。实际读过下列配套原题与评分材料，用来核对所需推导和检查；本页题目均为自拟，不是官方原题或评分标准。

- [Current 9665 qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/) and [9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FM1.2.
- FM02 June 2024 Q10(a)(b): [QP p.19](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf#page=19), [Final MS p.17](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf#page=17).

[上一课](/zh/alevel/as-further-mathematics/relative-motion/) · [课程路线](/zh/alevel/as-further-mathematics/#learning-route) · [下一课](/zh/alevel/as-further-mathematics/impulse-and-collisions/)
