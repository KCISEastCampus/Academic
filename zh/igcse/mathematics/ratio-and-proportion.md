---
layout: subjects
title: "比与比例"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/ratio-and-proportion/
permalink: /zh/igcse/mathematics/ratio-and-proportion/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)
{:.lesson-meta}

## 数量变了，什么关系没有变？ {#start}

配方可以放大，价格可以按每千克比较，同样一件工作也可能因增加工人而缩短时间。“两个数都在变”还不足以选模型，要找相同份数或保持不变的量。需要会[分数运算](/zh/igcse/mathematics/number-operations/#fraction-arithmetic)和[百分乘数](/zh/igcse/mathematics/percentage-change/#multipliers)。以下任务与数据均为自拟，无官方分值。

## 比数的是同样大的份 {#ratio-parts}

果汁与水的比为 3:2，表示每三份果汁配两份水，每份体积相同。不一定是三升果汁，除非一份恰好一升。总共五份：

$$\text{juice fraction}=\frac3{3+2}=\frac35,\qquad
\frac{\text{juice}}{\text{water}}=\frac32.$$

“占整体的分数”与“两部分的比”分母不同。化简比先统一单位，再把各项除以公因数：

$$150\text{ cm}:1\text{ m}=150:100=3:2.$$

顺序也不能换错：果汁:水=3:2，就意味着水:果汁=2:3。

![五个等大的份，前三份为果汁、后两份为水，下面标示全部五份是混合液总量。](/assets/img/igcse-number-ratio-parts.svg)

<div class="worked-example" markdown="1">

### 先求一份有多少 {#example-sharing}

**Question:** A 20-litre drink contains juice and water in ratio 3:2. How much of each is needed? In another mixture with the same ratio, juice exceeds water by 6 litres. Find the total volume.

第一杯的总量 20 升对应五份：

$$20\div(3+2)=4,\qquad3\times4=12,\qquad2\times4=8.$$

果汁 12 升、水 8 升；既要检查 12+8=20，也要检查 12:8=3:2。

第二杯给的是差，只对应一份，不是五份：

$$3-2=1,\qquad6\div1=6,\qquad(3+2)\times6=30.$$

总量 30 升，果汁 18 升、水 12 升。若把给出的差除以份数和，就是弄错了 6 升代表什么。

</div>

## 单位率把不同单位连起来 {#unit-rates}

率（rate）比较不同单位的量，例如元/小时、千米/小时、元/千克。“每”就是把分母的量换成 1 单位。工作 4.5 小时得到 54 元，时薪为 $54\div4.5=12$ 元；同一时薪下，7 小时为 84 元，前提是没有不同的加班费率。

比较 best buy 要统一数量，并假设质量相同。400 g 一包 2.40 元，相当于每千克 6 元；1 kg 一包 5.50 元，每千克 5.50 元。大包单位价更低，但若只需要少量、又不能拆包购买，它不一定让这次支出最少。

## 两种不同的变化关系 {#direct-inverse}

三本相同笔记本共 7.50 元，一本就是 2.50 元，八本为 20 元。数量翻倍，价格也翻倍。这是正比（direct proportion）：价格与数量的比值不变，而且没有起步费。

同一件工作，假设四位同效率工人要六小时，各人能独立工作、不会互相妨碍，总工作量就是 24 工人小时。八人只需三小时，而不是十二小时：人数乘时间保持不变。这是反比（inverse proportion）。没有这些效率假设，人数加倍不一定使时间减半。

下面的教学构造点给出正比和反比的图像数据：

| x | 1 | 2 | 3 | 4 | 6 |
| --- | --- | --- | --- | --- | --- |
| y, direct | 2 | 4 | 6 | 8 | 12 |
| y, inverse | 12 | 6 | 4 | 3 | 2 |

正比图像是过原点的直线；反比在正 x 范围是下降曲线，不碰两条坐标轴。这些是模型，不是证明现实定律的实测数据。

重复比例变化每次都对最新的量使用乘数。从 40 起连续增加两次 50%，得到 $40\times1.5=60$，再得到 $60\times1.5=90$。两次增加量是 20、30，不是固定相加模型。

## 根据关系选方法 {#practice}

<div class="lesson-check" markdown="1">

### 份数与单位 {#practice-sharing}

**Question:** A length ratio is 180 cm : 1.2 m. Simplify it and state the first length as a fraction of the combined length. Share 120 counters in ratio 2:3:5. A separate pair of quantities has ratio 5:3 and difference 12; find both quantities.

<details markdown="1">
<summary>提示</summary>

先把米换成厘米；辨认所给数量代表总量还是差。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$180:120=3:2,\qquad\text{first fraction}=\frac35.$$

计数片共十份，每份 12，分别为 24、36、60。另一对数量：

$$5-3=2,\quad12\div2=6,\quad5\times6=30,\quad3\times6=18.$$

检查 30-18=12，30:18=5:3。若把 5/3 当作占整体的分数，会让部分大于整体。

</details>

</div>

<div class="lesson-check" markdown="1">

### 由配方算成本 {#practice-mixture}

**Question:** A 24-litre mixture has liquid A and liquid B in ratio 5:3. A costs 2 dollars per litre and B costs 3 dollars per litre. Find the total cost. Another 8 litres of B is added. Find the new A:B ratio and explain whether the original recipe is preserved.

<details markdown="1">
<summary>提示</summary>

先求两种液体的实际体积，再计价和改变配比。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$24\div8=3,\quad A=15,\quad B=9.$$

$$15\times2+9\times3=57.$$

成本为 57 元。加 B 后的比为 15:17，不再是 5:3，因为只增加一种液体，并没有按同一倍数放大两种量。

</details>

</div>

<div class="lesson-check" markdown="1">

### 哪种购买方式符合真正需求？ {#practice-rates}

**Question:** Pack A contains 750 g for 3.60 dollars; pack B contains 1.2 kg for 5.40 dollars. Compare their prices per kilogram. If you need exactly 750 g or more and must buy whole packs, which purchase costs least? A worker earns 63 dollars for 4.5 hours at a constant rate. What should 6 hours pay?

<details markdown="1">
<summary>提示</summary>

单位价和这次最少支出是两种比较。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$3.60\div0.75=4.80,\qquad5.40\div1.2=4.50.$$

B 每千克更便宜；但一包 A 已满足 750 g，花 3.60 元，少于包含 B 的任何至少 5.40 元的购买方案。

$$63\div4.5=14,\qquad6\times14=84.$$

工资为 84 元，前提是时薪不变且无固定扣费。若直接用 3.60 除以 750，得到的是元/克，不能直接与元/千克比较。

</details>

</div>

<div class="lesson-check" markdown="1">

### 判断保持不变的量 {#practice-models}

**Question:** Table P gives pairs (x,y): (1,3), (2,6), (4,12). Table Q gives (1,12), (2,6), (4,3). Identify direct or inverse proportion and predict y at x=3. Plot both sets on separate axes with x from 0 to 4 and y from 0 to 12; add your predicted points and describe each graph. Separately, 6 identical pumps empty a tank in 10 hours: predict the time for 4 pumps and state an assumption. A quantity starts at 80 and falls by 25% twice; find the final quantity.

<details markdown="1">
<summary>提示</summary>

分别试 y 除以 x、x 乘 y；水泵完成的是同一总任务。

</details>

<details markdown="1">
<summary>解答与检查</summary>

P 的 y/x 恒为 3，因此 x=3 时 y=9；Q 的 xy 恒为 12，因此 x=3 时 y=4。P 用尺画过 (0,0)、(1,3)、(2,6)、(3,9)、(4,12) 的直线；Q 标出 (1,12)、(2,6)、(3,4)、(4,3)，在正区域画平滑下降曲线，不要连到原点。

$$6\times10=60,\qquad60\div4=15.$$

四台需 15 小时，假设效率相同且恒定、互不干扰；若持续有水流入，这个简单模型就不成立。

$$80\times0.75=60,\qquad60\times0.75=45.$$

最终为 45。连续两次减 25%，不是从原量直接减 50%。

</details>

</div>

## 把不变的关系写成方程 {#variation}

正变率写作 $y\propto x$，表示 $y=kx$，$k$ 为常数。先用已知一对求 $k$，再求新的一对。若 $x=6$ 时 $y=15$，就有 $k=15/6=2.5$，所以 $y=2.5x$。

反变率写作 $y\propto1/x$，表示 $y=k/x$，其中 $x\ne0$。仍给 $x=6$、$y=15$，常数却是乘积 $k=15\times6=90$，所以 $y=90/x$。同一对数能出现在不同模型中，必须根据题中关系选择常量；正量情境用 $x>0$。

<div class="lesson-check" markdown="1">

### 自己建立方程 {#practice-variation}

**Question:** For positive x, y varies directly as x and y=18 when x=4. Form an equation and find x when y=45. In a second model, z varies inversely as x and z=18 when x=4. Form its equation and find x when z=45.

<details markdown="1">
<summary>提示</summary>

第一个模型比值恒定，第二个模型乘积恒定。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$k=18\div4=4.5,\quad y=4.5x,\quad x=45\div4.5=10.$$

$$k=18\times4=72,\quad z=\frac{72}{x},\quad45x=72,\quad x=1.6.$$

两式都代回已知数对检查。反比输出增大，输入应减小，1.6 符合，而不是 10。

</details>

</div>

## 每次乘同一数，不是加同一数 {#exponential}

初始量 $N_0$ 在每个相同时间间隔都乘正的固定乘数 $a$：

$$N=N_0a^t.$$

$t$ 数的是这种间隔。$a>1$ 为指数增长，$0<a<1$ 为指数衰减，$a=1$ 则不变。N 并不与时间成正比，因为时间为零时初始量已经存在。

教学模型 $N=200(1.5)^t$ 在时刻 0、1、2、3 的值为 200、300、450、675。相邻比值均为 1.5，增加量却不同。模型假设乘数不变，忽略资源限制；即使表示个体数，也可能预测非整数，要说明预测何时只是近似。

<div class="lesson-check" markdown="1">

### 由数据找乘数 {#practice-growth}

**Question:** A model population is 500 initially and 605 after two equal time intervals. Assume the same positive growth factor in each interval. Find the factor and a formula for N after t intervals, then predict N after four intervals. A separate decay model has 800 units initially and 512 after two intervals; find its factor and formula. Explain why a constant-addition model is not the stated assumption.

<details markdown="1">
<summary>提示</summary>

两次间隔后的总倍数是单次乘数的平方。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$a^2=\frac{605}{500}=1.21,\quad a=1.1,\quad N=500(1.1)^t.$$

$$N_4=500(1.1)^4=732.05.$$

这是模型预测；需要整数个体时约为 732，不是精确实测个体数。

$$b^2=\frac{512}{800}=0.64,\quad b=0.8,\quad D=800(0.8)^t.$$

前者每次增加 10%，后者每次减少 20%。固定相加保持差值不变，固定相乘保持比值不变。仅有两个端点观测并不能证明现实应采用哪种模型；本题已给出建模假设。

</details>

</div>

## 检查你选的不变量 {#retry}

总量与差混淆回到[份数](#ratio-parts)；单位错回到[单位率](#unit-rates)；变化方向错回到[正反比](#direct-inverse)；常数错回到[变率方程](#variation)；误用固定相加回到[指数模型](#exponential)。

<div class="lesson-check" markdown="1">

### 再分配一次 {#retry-sharing}

**Question:** A ribbon ratio is 0.8 m : 120 cm. Simplify it and state the first share as a fraction of the whole. Split 84 tokens in ratio 2:5. In another pair with ratio 2:5, the difference is 21; find both quantities. A 14-litre mixture in ratio 2:5 uses liquids A and B costing 4 and 2 dollars per litre respectively; find the total cost. Then add 2 litres of A only to that mixture. Find the new ratio A:B and explain whether the original ratio is preserved.

<details markdown="1">
<summary>提示</summary>

同一个比可以用于总量、差或成本，但先找清一份。只增加一种配料时，更新它的实际体积，另一种保持不变。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$80:120=2:3,\qquad\text{first fraction}=\frac25.$$

84 枚对应一份 12，分得 24、60。差 21 对应三份，因此一份 7，两量为 14、35。

$$14\div7=2,\quad A=4,\quad B=10,\quad4\times4+10\times2=36.$$

原配方混合液成本为 36 元。只加入 A 后：

$$A=4+2=6,\quad B=10,\quad A:B=6:10=3:5.$$

原比没有保持：A 增加，B 仍为 10 升，两量没有同时乘以相同倍数。只知道总量增加，不能直接写出新比。长度的 2:3 与计数片、原配方的 2:5 是不同情境，不能串用。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再统一单位 {#retry-rates}

**Question:** Compare 500 g for 2.20 dollars with 1.5 kg for 6 dollars by unit price. If at least 2 kg is needed, with no mixing of pack types, compare the cheapest whole-pack purchase of each type. At 15 dollars per hour, what is the pay for 2 hours 24 minutes?

<details markdown="1">
<summary>提示</summary>

把分钟换成小时的分数，不是直接当百分位。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$2.20\div0.5=4.40,\qquad6\div1.5=4.00.$$

大包每千克较便宜；但四小包正好 2 kg，花 8.80 元，两大包 3 kg 要 12 元。按题中整包且不混买的条件，小包这次支出较少。

$$2+\frac{24}{60}=2.4,\qquad2.4\times15=36.$$

工资为 36 元；2 小时 24 分钟不是 2.24 小时。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再选择关系 {#retry-models}

**Question:** Five tickets cost 18 dollars at a constant price per ticket. Find the cost of eight. Three identical machines take 8 hours to make an order; find the time for six machines under a suitable assumption. A quantity starts at 50 and is multiplied by 1.2 in each of two stages; find the result.

<details markdown="1">
<summary>提示</summary>

机器保持总机器小时数不变，不是时间除以台数不变。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$18\div5\times8=28.8,\qquad3\times8\div6=4.$$

八张票 28.80 元；机器要四小时，假设效率相同、恒定且能独立工作。

$$50\times1.2=60,\qquad60\times1.2=72.$$

连续两次增加 20% 得 72，不是 70；第二次基准是 60。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再建立变率方程 {#retry-variation}

**Question:** For positive x, u varies directly as x and u=24 when x=3. Find an equation and x when u=40. For a different model, v varies inversely as x and v=24 when x=3. Find an equation and x when v=40.

<details markdown="1">
<summary>提示</summary>

正比用比值，反比用乘积。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$u=8x,\qquad x=5;\qquad v=\frac{72}{x},\qquad x=1.8.$$

两式在 x=3 时都回到 24；正比的输入与输出同增，反比则输出增大、输入减小。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再找增长与衰减模型 {#retry-growth}

**Question:** A quantity has values 300, 360, 432 at equally spaced times 0, 1, 2. Assuming a fixed multiplicative model, write a formula and predict time 3. Another quantity has values 100, 90, 81 at those times; give its formula and time-3 prediction.

<details markdown="1">
<summary>提示</summary>

比较相邻比值，不是相邻差值。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$N=300(1.2)^t,\quad N_3=518.4;\qquad M=100(0.9)^t,\quad M_3=72.9.$$

模型分别表示每个间隔增长 20%、衰减 10%。相邻差会变，相邻比值保持不变。

</details>

</div>

## 离开章节标题后再选择 {#next-step}

接着做[数的综合回顾](/zh/igcse/mathematics/mixed-review/#number-review)。学过另一分支后，再从[代数综合](/zh/igcse/mathematics/mixed-review/#algebra-review)或[数据综合](/zh/igcse/mathematics/mixed-review/#data-review)返回，判断证据真正支持什么关系；穿过数据的一条直线不自动证明正比定律。

## 范围与来源 {#sources}

<details markdown="1">
<summary>范围、层级与参考阅读</summary>

N16–N19、N20 的正反比、重复比例变化与指数增长衰减，以及 A18 的代数正反变率。这里只处理所需的基本正反比方程，不加入对数求解。

[OxfordAQA 9260 大纲 v5.1，PDF pp.13,16](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。

9260/1C, **Specimen 2018**, Q9(a)(b): [QP PDF p.8](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=8), [MS PDF p.5](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=5).

9260/1C, **Specimen 2018**, Q28: [QP PDF p.24](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=24), [MS PDF p.12](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=12).

9260/2E, **Specimen 2018**, Q14: [QP PDF p.12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=12), [MS PDF p.8](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8).

9260/2E, **Specimen 2018**, Q23(a)(b): [QP PDF p.20](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=20), [MS PDF p.13](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=13).

上述试题与配套评分页用于核对教学要求，本页未复刻官方试题。所有示范与任务均为自拟题，无官方分值；情境和图中数据为教学构造。

</details>
