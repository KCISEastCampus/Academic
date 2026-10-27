---
layout: subjects
title: "准确度与上下界"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/accuracy-and-bounds/
permalink: /zh/igcse/mathematics/accuracy-and-bounds/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)
{:.lesson-meta}

## 一个四舍五入后的数，究竟告诉了我们多少？ {#start}

标签上的 2.4 kg 不一定是精确的 2.4000 kg。先弄清数字怎样取近似，再判断它能支持什么结论。需要会读[位值](/zh/igcse/mathematics/number-operations/#place-value)和做除法。以下均为自拟题，无官方分值。

## 先找出要保留的那一位 {#rounding}

小数位（decimal places）从小数点后开始数；有效数字（significant figures）从第一个非零数字开始数。前面的零用来确定大小，不算有效数字；末尾的零却可能有意义：2.40 有三位有效数字、两位小数。

<div class="worked-example" markdown="1">

### 一个很小的测量值 {#example-rounding}

**Question:** Round 0.004786 to 2 significant figures and to 4 decimal places.

保留两位有效数字，从 4 开始数，留下 4、7；下一位是 8，便把 7 进成 8：

$$0.004786\approx0.0048\quad(2\text{ s.f.}).$$

保留四位小数时，第四位恰好也是 7，下一位仍是 8：

$$0.004786\approx0.0048\quad(4\text{ d.p.}).$$

这一次结果相同，但两种数法的起点不同。换成 23.746，相应答案是 24 和 23.7460。9.96 保留两位有效数字要进位成 10；写成 $1.0\times10^1$，两位有效数字就很清楚。

</div>

## 计算前先判断大概有多大 {#estimation}

估算（estimate）用邻近的方便数判断大概大小，能抓住小数点错误，但不能自动保证是上限或下限。

$$\frac{19.8\times0.51}{4.97}\approx\frac{20\times0.5}{5}=2.$$

正式计算仍用未舍入的数据，得到约 2.03179。输入时把整个分子、整个分母分别放进括号。如果显示 203.179，就与估算 2 差得太远。按要求对最终结果舍入一次，不要每步都先取近似。

## 先独立判断 {#practice}

<div class="lesson-check" markdown="1">

### 两种保留要求 {#practice-rounding}

**Question:** Round 0.030496 to 3 significant figures and to 3 decimal places. Explain why the number of digits after the decimal point differs.

<details markdown="1">
<summary>提示</summary>

有效数字从第一个非零数字起数；另行找到第三位小数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$0.030496\approx0.0305\quad(3\text{ s.f.}),\qquad0.030496\approx0.030\quad(3\text{ d.p.}).$$

三位有效数字保留 3、0、4，再根据下一位 9 进位；三位小数保留千分位的 0，下一位是 4，不进位。只写 0.03 无法表明保留了三位小数。

</details>

</div>

<div class="lesson-check" markdown="1">

### 检查一个计算结果 {#practice-estimation}

**Question:** A learner obtains 398.7 for $(39.6\times2.04)/20.3$. Estimate the answer and decide whether the display is plausible. Then use a calculator, record your grouped input, and calculate the answer to 3 significant figures.

<details markdown="1">
<summary>提示</summary>

选邻近且容易相除的数；重新输入时把分子括起来。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\frac{40\times2}{20}=4,\qquad \frac{39.6\times2.04}{20.3}=3.979507\ldots\approx3.98.$$

可输入 (39.6 × 2.04) ÷ 20.3，明确整段分子。398.7 不合理，约为估算值的一百倍。估算只能说明数量级不对，不能凭此断定具体按错了哪一个键。

</details>

</div>

## 标签背后有哪些可能读数？ {#limits}

这里用正测量值的普通四舍五入规则：恰好一半时向上取。精确到 0.1 kg 写成 2.4 kg，原值可以是 2.35 kg，却不能是 2.45 kg，因为后者会进成 2.5 kg：

$$2.35\le m<2.45.$$

左端包含，右端不包含。离标签值的半宽是 0.05 kg，也就是舍入单位的一半，不是 2.4 的一半。这个区间只描述舍入造成的限，并不能证明仪器没有校准偏差。

![质量数轴从 2.30 到 2.50 kg；2.35 为实心端点，2.45 为空心端点，两点之间用线段连接，中央标有记录值 2.4。](/assets/img/igcse-number-rounding-interval.svg)

<div class="lesson-check" markdown="1">

### 由记录值写出范围 {#practice-limits}

**Question:** A length is recorded as 8.2 cm to the nearest 0.1 cm. Write its error interval. Can the actual length be 8.25 cm? Explain.

<details markdown="1">
<summary>提示</summary>

找它到前后两个记录值的中点。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$8.15\le L<8.25\text{ cm}.$$

8.25 cm 会舍入为 8.3 cm，所以不包含。若写 8.1 到 8.3，就是把半个舍入单位误用了一个。

</details>

</div>

## 把有范围的量放进计算 {#calculated-bounds}

设正量 $a,b$ 满足 $a_L\le a<a_U$、$b_L\le b<b_U$。先问：某个输入增大，结果往哪边走？和随两项增大；差会随被减去的量增大而减小；正量的积随任一因数增大。商的正分母越大，结果反而越小：

$$a_L+b_L\le a+b<a_U+b_U,$$

$$a_L-b_U<a-b<a_U-b_L,$$

$$a_Lb_L\le ab<a_Ub_U,$$

$$\frac{a_L}{b_U}<\frac ab<\frac{a_U}{b_L}\quad\text{provided }b_L>0.$$

这些端点关系针对上述正量、左闭右开的区间。界可能是不断接近但取不到的数。如果分母可以趋近零，上面的除法规则就不能给出有限的界；若出现正负号变化，要检查各种可能的乘积，不能硬套正量规则。

<div class="worked-example" markdown="1">

### 必须保证安全的容量 {#example-bounds}

**Question:** A shelf supports a load recorded as 50 kg to the nearest kilogram. Each identical box has mass recorded as 3 kg to the nearest kilogram. Using only these rounding intervals, find the largest number of boxes guaranteed to stay within the load limit.

承重能力可能低至 49.5 kg，每个箱子却可能接近 3.5 kg。要保证，就得应对这个组合，不能选“架子更强、箱子更轻”的有利组合。

$$49.5\le C<50.5,\qquad2.5\le m<3.5.$$

$$\frac{49.5}{3.5}=14.142857\ldots.$$

检查两边的整数件数：

$$14\times3.5=49<49.5,\qquad15\times3.5=52.5>49.5.$$

模型能保证的是 **14 个箱子**。15 个不能保证：例如每个 3.4 kg 都在允许范围内，总质量却是 51 kg，超过可能的承重能力 49.5 kg。这是舍入的数学模型，不代替真实工程安全等级。

</div>

<div class="lesson-check" markdown="1">

### 同时考虑两个测量量 {#practice-bounds}

**Question:** A rectangle has length 12 cm and width 5 cm, each rounded to the nearest centimetre. Find lower and upper bounds for its area, for length plus width and for length minus width. Find lower and upper bounds for length divided by width, and state whether each bound is attained.

<details markdown="1">
<summary>提示</summary>

先写每个输入的区间；求商时，分母与分子选择的方向相反。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$11.5\le L<12.5,\qquad4.5\le W<5.5.$$

$$51.75\le A<68.75\text{ cm}^2.$$

$$16\le L+W<18\text{ cm},\qquad6<L-W<8\text{ cm}.$$

面积与和的下界都能取到，因为两边都可以取包含的下端点；它们的上界取不到。差的两界也都取不到：最小差需要取被排除的最大宽，最大差则需要取被排除的最大长。

$$\frac{23}{11}<\frac LW<\frac{25}{9}.$$

商的两界约为 2.0909、2.7778，均取不到，因为都需要用到一个被排除的上端点。只算 12/5 忽略了舍入范围；用 12.5/5.5 作上界，同时增大两项，也不能使商最大。

</details>

</div>

## 回到具体出错的概念 {#retry}

小数位和有效数字混淆，回看[保留位](#rounding)；端点写错，回看[区间](#limits)；商或容量选错方向，回到[上下界示范](#calculated-bounds)，先说清哪个输入增大才会使结果增大。收起旧解答后再试。

<div class="lesson-check" markdown="1">

### 再判断数位 {#retry-rounding}

**Question:** Round 0.006057 to 2 significant figures and to 4 decimal places. Estimate 59.8 divided by 0.203, then give its value to 3 significant figures.

<details markdown="1">
<summary>提示</summary>

开头的零不算有效数字；估算可用 60 和 0.2。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$0.006057\approx0.0061\quad(2\text{ s.f.}),\qquad0.006057\approx0.0061\quad(4\text{ d.p.}).$$

$$59.8\div0.203\approx60\div0.2=300,\qquad59.8\div0.203=294.581\ldots\approx295.$$

除以小于 1 的数，结果会增大；接近 3 的答案过不了大小检查。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再写一次区间 {#retry-limits}

**Question:** A positive mass is recorded as 0.060 kg to the nearest 0.001 kg. Write the interval and explain whether 0.0605 kg belongs.

<details markdown="1">
<summary>提示</summary>

舍入单位的一半是 0.0005 kg。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$0.0595\le m<0.0605\text{ kg}.$$

0.0605 kg 会舍入成 0.061 kg，不能包含。记录值的最后一个零表明精确到千分位。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再判断保证量 {#retry-bounds}

**Question:** A tank capacity is 20 litres to the nearest litre. Every bottle holds 0.8 litres to the nearest 0.1 litre. What is the largest number of full bottles whose total contents are guaranteed to fit? Also give bounds for the sum and difference of two positive lengths recorded as 8 cm and 3 cm, each to the nearest centimetre. If these are the sides of a rectangle, give bounds for its area and explain whether each endpoint can be attained.

<details markdown="1">
<summary>提示</summary>

用最小水箱和最大瓶量；求差时第二个长度是被减去的。求面积时，先判断增大任一正边长会怎样改变乘积。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$19.5\le C<20.5,\qquad0.75\le b<0.85,\qquad19.5\div0.85=22.941176\ldots.$$

可以保证 22 瓶，不能保证 23 瓶。例如每瓶 0.849 升时，23 瓶已超过 19.5 升。

$$7.5\le x<8.5,\quad2.5\le y<3.5,\quad10\le x+y<12,\quad4<x-y<6.$$

和能取到 10；差的两端都取不到，因为各自需要一个被排除的上端点。

矩形两边都是正数，任一边增大都会使面积增大：

$$7.5\times2.5\le A<8.5\times3.5,\qquad18.75\le A<29.75\text{ cm}^2.$$

两边同时取各自包含的下端点时，面积能取到 18.75；29.75 是上界，不是能取到的最大面积，因为两个边长的上端点都被排除。直接用记录值相乘只给出一种可能面积，不能代替完整区间。

</details>

</div>

## 把准确度用到下一个主题 {#next-step}

接着学[百分变化](/zh/igcse/mathematics/percentage-change/#start)。学完后进入[数与运算综合回顾](/zh/igcse/mathematics/mixed-review/#number-review)，判断何时只需近似答案，何时必须用界才能保证。

## 范围与来源 {#sources}

<details markdown="1">
<summary>范围、层级与参考阅读</summary>

N11：舍入、估算、理解准确度的限，以及计算并运用上下界。N10 在此覆盖数值输入与检查，不提供特定机型按键。

[OxfordAQA 9260 大纲 v5.1，PDF pp.12–13](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。

9260/2C, **Specimen 2018**, Q9: [QP PDF p.8](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=8), [MS PDF p.5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=5).

9260/2E, **Specimen 2018**, Q24: [QP PDF p.21](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=21), [MS PDF p.14](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=14).

上述试题与配套评分页用于核对教学要求，本页未复刻官方试题。所有示范与任务均为自拟题，无官方分值；情境和图中数据为教学构造。

</details>
