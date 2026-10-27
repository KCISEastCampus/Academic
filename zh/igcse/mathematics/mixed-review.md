---
layout: subjects
title: 综合与稍后回顾
mathjax: true
grade: igcse
subject: igcse-mathematics
reading_layout: true
study_page: true
toc_headings: h2
permalink: /zh/igcse/mathematics/mixed-review/
lang: zh-CN
translation_of: /igcse/mathematics/mixed-review/
---

[IGCSE Mathematics](/zh/igcse/mathematics/#review-route)
{:.lesson-meta}

## 先自己判断 {#start}

这些题不会先告诉你使用哪一种方法。学完对应分支后，先在纸上作答，再按需要看提示；用过提示也没关系，但要记清哪些部分还不能独立完成。这里全部为自拟题和构造情境，无官方分值。学完对应内容后，再做相关分支的题目。

<span id="practice"></span>

## 数量与决策 {#number-review}

<div class="lesson-check" markdown="1">

### 学校花园 {#garden}

**Question:** A rectangular garden is 6 cm by 4 cm on a plan with scale 1:200. A pond covers $3/8$ of the real garden. The rest needs turf costing 15 yuan per square metre before a 12% discount. Find the amount paid for the turf. Show how you use the plan.

<details markdown="1">
<summary>提示</summary>

先求实际边长，不要直接把面积乘以比例尺。哪些地方需要铺草？

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$6\times200=1200\text{ cm}=12\text{ m},\qquad4\times200=800\text{ cm}=8\text{ m}.$$

$$A=12\times8=96\text{ m}^2,\qquad A_{\text{turf}}=96\left(1-\frac38\right)=60\text{ m}^2.$$

$$\text{Cost}=60\times15\times(1-0.12)=792\text{ yuan}.$$

比例尺先改变长度。池塘比例针对原面积，折扣比例针对原价格。折后应低于 900 元；把图上面积直接乘 200 会用错面积比例。

如果把面积按长度比例放大，回看[比例尺](/zh/igcse/mathematics/constructions-loci-and-bearings/#scale-measure)，再做[长度重试](/zh/igcse/mathematics/constructions-loci-and-bearings/#retry-map)和本页的[新地图题](#retry-map-area)，检查两条边怎样影响面积。如果选错整体，回看[求部分](/zh/igcse/mathematics/fractions-decimals-and-percentages/#find-part)，再做[相应重试](/zh/igcse/mathematics/fractions-decimals-and-percentages/#retry-part)。折扣出错则回看[变化乘数](/zh/igcse/mathematics/percentage-change/#multipliers)，再做[变化重试](/zh/igcse/mathematics/percentage-change/#retry-change)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 能否保证够用 {#board}

**Question:** A rectangular board is measured as 2.4 m by 1.8 m, each correct to the nearest 0.1 m. A supplier says that 4.4 square metres of covering will definitely cover it without overlap or waste. Is that guarantee justified? Explain using the possible area.

<details markdown="1">
<summary>提示</summary>

两条边长都为正。分别考虑能取到的最小乘积和面积上界。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$2.35\le l<2.45,\qquad1.75\le w<1.85.$$

$$2.35(1.75)\le A<2.45(1.85),\qquad4.1125\le A<4.5325\text{ m}^2.$$

不能保证：允许的面积中有些超过 4.4。例如 2.44 m 和 1.84 m 都符合舍入条件，面积却为 4.4896 平方米。只算两个显示值的乘积，无法证明“一定够用”。

端点出错时，回看[舍入区间](/zh/igcse/mathematics/accuracy-and-bounds/#limits)，再做[区间重试](/zh/igcse/mathematics/accuracy-and-bounds/#retry-limits)。如果用显示值乘积作保证，回看[组合上下界](/zh/igcse/mathematics/accuracy-and-bounds/#calculated-bounds)，再做[保证容量重试](/zh/igcse/mathematics/accuracy-and-bounds/#retry-bounds)。

</details>

</div>

## 关系与条件 {#algebra-review}

<div class="lesson-check" markdown="1">

### 活动门票 {#tickets}

**Question:** An event sells 32 tickets. Adult tickets cost 8 yuan and student tickets cost 5 yuan. The total income is 199 yuan. How many tickets of each type were sold? Define your unknowns and check both totals.

<details markdown="1">
<summary>提示</summary>

分别表达总张数和总收入，两个式子使用同一组未知量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$a+s=32,\qquad8a+5s=199.$$

$$s=32-a,\qquad8a+5(32-a)=199,\qquad3a=39.$$

$$a=13,\qquad s=19,\qquad13+19=32,\qquad8(13)+5(19)=199.$$

成人票 13 张，学生票 19 张。不能只检查张数，还要检查收入；票数也不能是负数或非整数。

收入方程列错时，回看[情境列式](/zh/igcse/mathematics/equations-and-inequalities/#model)，再做[方程重试](/zh/igcse/mathematics/equations-and-inequalities/#retry-equations)。如果一对值不能同时满足两条件，回看[联立方程](/zh/igcse/mathematics/quadratics-and-simultaneous-equations/#simultaneous)，再做[联立重试](/zh/igcse/mathematics/quadratics-and-simultaneous-equations/#retry-simultaneous)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 带限制的规则 {#restricted}

**Question:** For $f(x)=x^2-4x+1$ with domain $x\ge2$, find its range and an expression for $f^{-1}(x)$, stating the inverse domain. Then solve $f(x)=6$ within the stated domain.

<details markdown="1">
<summary>提示</summary>

换一种写法，看清最低点和允许的那一侧。反过来求输入时，仍要遵守那一侧的限制。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$f(x)=(x-2)^2-3,\qquad x\ge2,\qquad f(x)\ge-3.$$

$$y+3=(x-2)^2,\qquad x-2=\sqrt{y+3},\qquad x=2+\sqrt{y+3}.$$

$$f^{-1}(x)=2+\sqrt{x+3},\qquad x\ge-3.$$

$$f(x)=6\ \Longrightarrow\ (x-2)^2=9\ \Longrightarrow\ x=-1\text{ or }5.$$

$$x\ge2\ \Longrightarrow\ x=5,\qquad f(5)=25-20+1=6.$$

值域是所有不小于负 3 的数。原输入不小于 2，所以移项后的平方根取非负一支。反函数的输入来自原函数的输出；候选值负 1 不符合原定义域。

如果保留了两支平方根，回看[有范围限制的反函数](/zh/igcse/mathematics/functions-and-graphs/#inverse)，再做[反函数重试](/zh/igcse/mathematics/functions-and-graphs/#retry-inverse)。接受候选值前，先核对允许的输入。

</details>

</div>

## 图形与方向 {#geometry-review}

<div class="lesson-check" markdown="1">

### 两个立体模型 {#models}

**Question:** A cuboid is 4 cm long, 3 cm wide and 2 cm high. A similar cuboid has every length multiplied by 1.5. Find the volume and total surface area of each. Explain why the same multiplier cannot be used for all three quantities.

<details markdown="1">
<summary>提示</summary>

面积涉及两个长度相乘，体积涉及三个。表面积要算到六个面。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$V=4\times3\times2=24\text{ cm}^3,\qquad S=2(4\times3+4\times2+3\times2)=52\text{ cm}^2.$$

$$V_{\text{new}}=24(1.5)^3=81\text{ cm}^3,\qquad S_{\text{new}}=52(1.5)^2=117\text{ cm}^2.$$

长度乘一次比例，面积乘两次，体积乘三次。检查时可直接使用新边长 6 cm、4.5 cm、3 cm，体积仍相同。

如果面积、体积只乘了一次 1.5，回看[长度、面积与体积比例](/zh/igcse/mathematics/units-area-and-volume/#scaling)，再做[比例重试](/zh/igcse/mathematics/units-area-and-volume/#retry-scale)。漏算面时，回看[柱体与外表面](/zh/igcse/mathematics/units-area-and-volume/#prisms)，再做[柱体重试](/zh/igcse/mathematics/units-area-and-volume/#retry-prism)。

</details>

</div>

<div class="lesson-check" markdown="1">

### 返回路线 {#journey}

**Question:** A walker travels 4 km due east and then 3 km due north. Draw and label a sketch. Find the straight-line distance back to the starting point and the three-figure bearing of the starting point from the finishing point, to the nearest degree.

<details markdown="1">
<summary>提示</summary>

在终点标北向。方位角从终点的北向起，顺时针量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$d^2=4^2+3^2=25,\qquad d=5\text{ km}.$$

在终点 F，令 $\theta$ 表示向南射线与西南返程 FS 之间的角。对着这个角，水平 4 km 是对边，竖直 3 km 是邻边。方位角先从北顺时针转到南，再转过这个角。

$$\tan\theta=\frac43,\qquad\theta\approx53.13^\circ,\qquad\text{bearing}=180^\circ+\theta\approx233^\circ.$$

![Return-journey solution: start S is 4 km west and 3 km south of finish F; a north arrow at F and the southwest return are shown.](/assets/img/igcse-review-return-journey.svg)

返回方向是西南，所以方位角应在 180 到 270 度之间。草图应有水平 4 km、竖直 3 km 的直角三角形；不能把去程的方向当成回程。

方位角起点错了，回看[方位角](/zh/igcse/mathematics/constructions-loci-and-bearings/#bearings)，再做[方位角重试](/zh/igcse/mathematics/constructions-loci-and-bearings/#retry-bearing)。三角比选错则回看[对边与邻边](/zh/igcse/mathematics/pythagoras-and-trigonometry/#ratios)，再做[三角比重试](/zh/igcse/mathematics/pythagoras-and-trigonometry/#retry-ratios)。

</details>

</div>

## 用数据判断 {#data-review}

<div class="lesson-check" markdown="1">

### 比较等待时间 {#times}

**Question:** Two small samples of waiting times in minutes are A: 2, 3, 3, 4, 8 and B: 3, 3, 4, 5, 5. Find each mean, median and range. A student says, “B is always faster because its times vary less.” Assess the statement using the data and state a limitation of the samples.

<details markdown="1">
<summary>提示</summary>

离散程度和典型等待时间是两件事。“总是”又作了多强的断言？

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\overline{x}_A=\frac{20}{5}=4,\qquad\operatorname{median}_A=3,\qquad\operatorname{range}_A=8-2=6.$$

$$\overline{x}_B=\frac{20}{5}=4,\qquad\operatorname{median}_B=4,\qquad\operatorname{range}_B=5-3=2.$$

在这两份样本里，B 的波动较小，但中位数更高，均值相同。波动较小不等于总是更快。每组只有五次观察，也不知道抽样方式，不能直接推广到所有等待时间。

如果把波动小写成每一次都更快，回看[平均数与极差能说明什么](/zh/igcse/mathematics/data-and-averages/#averages)，再做[比较重试](/zh/igcse/mathematics/data-and-averages/#retry-averages)。结论中保留样本的限制。

</details>

</div>

<div class="lesson-check" markdown="1">

### 社团与抽选 {#clubs}

**Question:** Of 20 students, 8 cycle, 12 swim and 5 do both. Draw a Venn diagram including students who do neither. One student is chosen at random from those who cycle. Find the probability that this student swims. Are cycling and swimming independent for a random student from all 20? Justify your answer.

<details markdown="1">
<summary>提示</summary>

先填交集。第一次抽选只在一个较小群体中进行；检验独立性时看全部学生。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$n(C\setminus S)=8-5=3,\quad n(S\setminus C)=12-5=7,\quad n((C\cup S)^{\prime})=20-(3+5+7)=5.$$

$$P(S\mid C)=\frac58,\qquad P(C\cap S)=\frac5{20}=\frac14.$$

$$P(C)P(S)=\frac8{20}\frac{12}{20}=\frac6{25}\ne\frac14.$$

![Solution Venn diagram: cycling only 3, both 5, swimming only 7, neither 5; the cycling group contains 8.](/assets/img/igcse-review-clubs.svg)

Venn 图四块依次为只骑车 3、两者都做 5、只游泳 7、两者都不做 5。条件概率的分母是 8。交集概率不等于两个概率之积，所以不独立。数据是自拟的，不是学校调查结果。

条件概率仍用 20 作分母时，回看[已知条件限定的群体](/zh/igcse/mathematics/combined-and-conditional-probability/#conditional-table)，再做[条件概率重试](/zh/igcse/mathematics/combined-and-conditional-probability/#retry-conditional)。如果直接假设独立，回看[独立性的判断](/zh/igcse/mathematics/combined-and-conditional-probability/#independence)，再做[从新数据判断独立性](/zh/igcse/mathematics/combined-and-conditional-probability/#practice-independent-table)。

</details>

</div>

## 学过其他内容后再回来 {#later-review}

<div class="lesson-check" markdown="1">

### 稍后检查 A {#later-price}

**Question:** A price rises by 20% and then falls by 20%. The final price is 96 yuan. Find the original price and explain whether the two changes cancel.

<details markdown="1">
<summary>提示</summary>

注意两次百分数针对的价格不同。先写出连续变化，再反推。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$P\times1.2\times0.8=96,\qquad0.96P=96,\qquad P=100.$$

不会抵消：降价针对涨价后的较高价格，最后比原价低 4%。原价是 100 元；涨到 120 元再减去 24 元，得到 96 元。

如果从最终价格再减一个百分数来反推，回看[倒推原量](/zh/igcse/mathematics/percentage-change/#reverse)，再做[逆百分数重试](/zh/igcse/mathematics/percentage-change/#retry-reverse)。每个乘数都针对那次变化前的量。

</details>

</div>

<div class="lesson-check" markdown="1">

### 稍后检查 B {#later-extension}

**Question:** The curve $y=x^3-3x$ has stationary points. Find and classify them by checking the sign of the gradient on each side, then state the equation of its tangent at $x=0$. Explain why a zero gradient does not always mean a maximum or minimum, using $y=x^3$.

<details markdown="1">
<summary>提示</summary>

驻点的斜率为零，但类型要看它两边怎样变化。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\frac{dy}{dx}=3x^2-3=3(x-1)(x+1),\qquad x=-1,1.$$

$$y(-1)=2,\qquad y(1)=-2.$$

$$x<-1:\ y^{\prime}>0;\quad-1<x<1:\ y^{\prime}<0;\quad x>1:\ y^{\prime}>0.$$

$$y(0)=0,\qquad y^{\prime}(0)=-3,\qquad\text{tangent: }y=-3x.$$

$$y=x^3:\quad y^{\prime}=3x^2,\qquad y^{\prime}(0)=0,\qquad y^{\prime}>0\text{ on both sides of }0.$$

在负 1 处，斜率由正变负，是极大点（负 1，2）；在 1 处由负变正，是极小点（1，负 2）。最后的立方函数在原点两侧仍递增，但弯曲方向改变，是驻点拐点。草图应符合这些变化。

如果把零斜率直接判成转折点，回看[驻点分类](/zh/igcse/mathematics/differentiation-and-motion/#stationary)，再做[分类重试](/zh/igcse/mathematics/differentiation-and-motion/#retry-stationary)。切线截距不对时，回看[点与斜率](/zh/igcse/mathematics/differentiation-and-motion/#tangent)，再做[切线重试](/zh/igcse/mathematics/differentiation-and-motion/#retry-tangent)。

</details>

</div>

## 错了以后做什么 {#retry}

先判断是读错整体、条件遗漏、方法选择、图像解释还是运算出错。每题解答后的链接会带到对应主题；回看具体概念后，收起答案，做那页的重试题。不要把抄完本题解答当作已经会做。

<div class="lesson-check" markdown="1">

### 新地图题 {#retry-map-area}

**Question:** A rectangular lawn has perimeter 12 cm on a plan, and one side is 4 cm long on the plan. The scale is 1:500. Find the real area of the lawn in square metres and explain how you use the scale.

<details markdown="1">
<summary>提示</summary>

先用周长找到图上另一条边，再分别求两条实际边长。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$2(4+w)=12,\qquad w=2\text{ cm}.$$

$$4\times500=2000\text{ cm}=20\text{ m},\qquad2\times500=1000\text{ cm}=10\text{ m}.$$

$$A=20\times10=200\text{ m}^2.$$

图上面积为 8 平方厘米。比例尺作用于两条边，所以不是把 8 只乘一次 500。检查时，从 20 m 与 10 m 各除以 500，应还原图上的 4 cm 与 2 cm。若仍错，回看[单位与平面面积](/zh/igcse/mathematics/units-area-and-volume/#flat-shapes)，再重新画图核对两条边。

</details>

</div>

## 下一步 {#next-step}

学习其他分支后，再回到[稍后检查](#later-review)，先不看之前的解答。需要系统补习时，回[课程路线](/zh/igcse/mathematics/#learning-start)。

## 范围与来源 {#sources}

<details markdown="1">
<summary>查看范围</summary>

依据 OxfordAQA 9260 v5.1，以跨主题提取连接 N11、N13–N20，A9、A11、A13–A15、A21–A22，G12、G14、G17、G19，S5、S7、S16–S18。题目全部自拟，不是官方整卷替代品。各主题教学与官方材料的身份见对应课末来源。

</details>
