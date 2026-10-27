---
layout: subjects
title: "百分变化"
mathjax: true
grade: igcse
subject: igcse-mathematics
lang: zh-CN
translation_of: /igcse/mathematics/percentage-change/
permalink: /zh/igcse/mathematics/percentage-change/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE 数学](/zh/igcse/mathematics/#learning-start)
{:.lesson-meta}

## 百分数是以哪个量为基准？ {#start}

先减价 20% 再涨价 20%，通常回不到原价，因为第二次的基准量变了。本课先追踪这个基准，再处理利息与反向问题。先要会[求一个量的几分之几和百分之几](/zh/igcse/mathematics/fractions-decimals-and-percentages/#find-part)。以下均为自拟题，无官方分值。

## 把原量也算进乘数 {#multipliers}

原量是 100%。减去 15% 后剩 85%，乘数为 0.85；增加 15% 后是 115%，乘数为 1.15。设原量为 $P$，百分数中的数字为 $r$：

$$\text{new}=P\left(1+\frac r{100}\right)\quad\text{for an increase},$$

$$\text{new}=P\left(1-\frac r{100}\right)\quad\text{for a decrease}.$$

对正的原量，带方向的百分变化为：

$$\frac{\text{new}-\text{original}}{\text{original}}\times100\%.$$

分母用原量，不是新量；负答案表示减少。这里普通价格模型中的减幅在 0% 到 100% 之间。

<div class="worked-example" markdown="1">

### 先打折，再涨价 {#example-change}

**Question:** A price of 80 dollars is reduced by 15%, then the reduced price is increased by 10%. Find the final price and the overall percentage change.

每次乘数都作用于那次变化前的量：

$$80\times0.85=68,\qquad68\times1.10=74.80.$$

最终为 74.80 元，再与原来的 80 比较：

$$\frac{74.8-80}{80}\times100\%=-6.5\%.$$

整体减少 6.5%，不是把 15%-10% 算成 5%。合并乘数检查：$0.85\times1.10=0.935$，确实剩原量的 93.5%。

</div>

通过率从 40% 到 50%，增加的是 10 个百分点；相对原通过率则增加 25%。前者直接比较两个百分数，后者把变化量与原来的 40 比较。两种说法回答不同问题。

## 利息按原本金，还是按越来越多的余额？ {#interest}

单利（simple interest）每年都按原本金计算，所以每年利息相同；复利（compound interest）把利息加入余额，下次利息也会生息。利率必须与计息周期匹配。这里假设没有存取、费用或利率变化。

<div class="worked-example" markdown="1">

### 把每一年的基数写出来 {#example-interest}

**Question:** 1000 dollars is invested for 3 years at 10% per year. Compare simple and compound interest.

单利每年增加原来 1000 的 10%，也就是 100：

$$1000+100=1100,\quad1100+100=1200,\quad1200+100=1300.$$

最后总额为 1300，其中利息 300。复利则每次把最新余额乘 1.10：

$$1000\times1.10=1100,$$

$$1100\times1.10=1210,$$

$$1210\times1.10=1331.$$

最后总额为 1331，其中利息 331。第一年相同，后面不同，因为复利改用 1100、1210 作基数，不总是 1000。模型计算保留中间精度，最后按要求处理金额；真实账户可能另有舍入约定。

</div>

## 试试变化了的情境 {#practice}

<div class="lesson-check" markdown="1">

### 往返变化不相同 {#practice-change}

**Question:** A price falls from 120 dollars to 90 dollars. Find the percentage decrease. It later returns to 120 dollars. Find the percentage increase from 90. Separately, a rate rises from 30% to 36%; state its increase in percentage points and its relative percentage increase.

<details markdown="1">
<summary>提示</summary>

每次先写出这次比较的原量。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$\frac{120-90}{120}\times100\%=25\%,\qquad
\frac{120-90}{90}\times100\%=33\frac13\%.$$

两次基准分别是 120、90。通过率增加 6 个百分点，相对增幅为：

$$\frac{36-30}{30}\times100\%=20\%.$$

百分点差与百分变化不是同一计算。

</details>

</div>

<div class="lesson-check" markdown="1">

### 追踪余额 {#practice-interest}

**Question:** 800 dollars is invested for 2 years at 5% per year. Account A uses simple interest; account B uses compound interest. Find the final amount and interest in each. A separate item worth 800 dollars loses 5% of its current value each year; find its value after 2 years.

<details markdown="1">
<summary>提示</summary>

第一个账户每年增加同一笔；后两种每年更新基数。

</details>

<details markdown="1">
<summary>解答与检查</summary>

单利每年增加 40：

$$800+40+40=880.$$

利息是 80。复利为：

$$800\times1.05=840,\qquad840\times1.05=882.$$

利息是 82。逐年折旧用 0.95，不是固定减同一笔：

$$800\times0.95=760,\qquad760\times0.95=722.$$

第二年只减少 38，少于第一年的 40。每次都减 40 是另一个模型。

</details>

</div>

## 顺着乘数倒推回去 {#reverse}

<div class="worked-example" markdown="1">

### 找回原量 {#example-reverse}

**Question:** A sale price of 96 dollars is 20% below the original price. Find the original price.

96 元代表原价的 80%，不是 100%。设原价为 $P$：

$$0.80P=96,\qquad P=96\div0.80=120.$$

顺向检查：$120\times0.80=96$。若把 96 增加 20%，得到 115.20，无法通过顺向检查，因为那次 20% 用错了基准。

</div>

<div class="lesson-check" markdown="1">

### 找缺失的起点 {#practice-reverse}

**Question:** An item costs 72 dollars after a 10% discount. Find its original price. The sale price is then increased by 25%. Find the final price and its overall percentage change from the original.

<details markdown="1">
<summary>提示</summary>

先撤销 0.90，再把题中的折后价乘 1.25。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$P=72\div0.90=80,\qquad72\times1.25=90.$$

$$\frac{90-80}{80}\times100\%=12.5\%.$$

最终 90 元，整体增加 12.5%。检查：$0.90\times1.25=1.125$。

</details>

</div>

## 公式把重复过程记录下来 {#formula-model}

年百分利率 $r$ 不变，本金为 $P$，经过 $n$ 个整年，每年用一次乘数：

$$V=P\left(1+\frac r{100}\right)^n.$$

$V$ 包含本金，利息才是 $V-P$。这就是复利公式。衰减把加号换成减号。不能把年利率与月数指数混用，除非另外说明相容的模型。

若 1500 每年增加 3%，模型是 $V=1500(1.03)^n$。要找第一次在年末超过 1600 的时间，逐个整年计算，并保留试值链：

$$V_1=1545,\quad V_2=1591.35,\quad V_3=1639.0905.$$

余额逐年增加，第 2 年仍低于、第 3 年已超过，所以第一次是第 3 年。不需要对数，也不额外假设零碎年份的银行规则。

<div class="lesson-check" markdown="1">

### 建立并使用模型 {#practice-model}

**Question:** An investment of 2000 dollars becomes 2420 dollars after 2 years of compound interest at a constant positive annual rate. Find the rate. A separate 1000-dollar investment earns 8% compound interest annually. Write its value after n years and find the first year end when it exceeds 1200 dollars. State your assumptions.

<details markdown="1">
<summary>提示</summary>

未知利率先求正的年乘数，使它的平方等于 2420/2000；门槛问题逐年检查。

</details>

<details markdown="1">
<summary>解答与检查</summary>

设正的年乘数为 $q$：

$$q^2=\frac{2420}{2000}=1.21,\qquad q=1.10.$$

年利率是 10%；负平方根不能成为普通正余额的年乘数。另一笔投资：

$$V=1000(1.08)^n.$$

$$V_1=1080,\quad V_2=1166.4,\quad V_3=1259.712.$$

第一次超过 1200 是第 3 年末，第 2 年还没超过。假设年利率固定、每年复利一次，没有存取或费用。只写最后一项、不检查前一年，不能证明“第一次”。

</details>

</div>

## 修复基准量的选择 {#retry}

整体变化错，回到[乘数](#multipliers)；本金、利息混淆，回到[逐年比较](#interest)；逆百分要[除以乘数](#reverse)；第一次过门槛要检查[前一个年份](#formula-model)。

<div class="lesson-check" markdown="1">

### 再判断变化 {#retry-change}

**Question:** A price of 200 dollars rises by 10%, then falls by 10%. Find the final price and the overall percentage change. A rate falls from 50% to 40%; state its percentage-point decrease and relative percentage decrease.

<details markdown="1">
<summary>提示</summary>

每一步都按当时的基准计算。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$200\times1.10=220,\quad220\times0.90=198,\quad
\frac{198-200}{200}\times100\%=-1\%.$$

整体减少 1%。通过率减少 10 个百分点，相对原来的 50 则减少 20%。相同百分数的涨跌不能抵消，因为基准不同。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再追踪利息 {#retry-interest}

**Question:** 600 dollars earns 4% per year for 2 years. Compare the total interest with simple interest and compound interest.

<details markdown="1">
<summary>提示</summary>

两种模型第一年的利息都是 24。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$I_{\text{simple}}=24+24=48.$$

$$600\times1.04=624,\quad624\times1.04=648.96,\quad I_{\text{compound}}=648.96-600=48.96.$$

复利多出 0.96，因为第一年的 24 也再获得 4% 利息。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再倒推一次 {#retry-reverse}

**Question:** A bill is 138 dollars after a 15% increase. Find the original bill and verify it.

<details markdown="1">
<summary>提示</summary>

138 代表原来的 115%。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$P=138\div1.15=120,\qquad120\times1.15=138.$$

减去 138 的 15% 会用错基准。

</details>

</div>

<div class="lesson-check" markdown="1">

### 再建立模型 {#retry-model}

**Question:** 500 dollars earns 10% compound interest per year. Write a formula for its value after n years. Find the first year end when it exceeds 650 dollars. What is the interest at that time? Separately, an investment of 600 dollars becomes 636.54 dollars after 2 years at a constant positive annual compound-interest rate, with no deposits, withdrawals or fees. Find that annual rate and check your result forwards.

<details markdown="1">
<summary>提示</summary>

逐年检查，直到越过门槛。另一笔投资先找正的年乘数，使其平方等于终值与本金的比。

</details>

<details markdown="1">
<summary>解答与检查</summary>

$$V=500(1.10)^n,\quad V_1=550,\quad V_2=605,\quad V_3=665.5.$$

第一次是第 3 年；利息为 $665.5-500=165.5$ 元。这些是按题中每年复利模型得到的年末值。

另一笔投资设正的年乘数为 $q$：

$$q^2=\frac{636.54}{600}=1.0609,\qquad q=\sqrt{1.0609}=1.03,\qquad r=(1.03-1)\times100=3\%.$$

年利率为 3%。普通正余额使用正乘数，所以取正平方根。再正向核对完整两年：

$$600\times1.03=618,\qquad618\times1.03=636.54.$$

两年总增长 6.09% 不是年利率；每年都以上一年的余额为基数。

</details>

</div>

## 把乘数用于钱以外的问题 {#next-step}

接着学[比与比例](/zh/igcse/mathematics/ratio-and-proportion/#start)，把重复乘数用于数量变化。之后进入[数的综合回顾](/zh/igcse/mathematics/mixed-review/#number-review)，练习在没有预先指出方法时自己选择。

## 范围与来源 {#sources}

<details markdown="1">
<summary>范围、层级与参考阅读</summary>

N15：百分增减、单利、复利、逆百分及复利公式的掌握运用。模型中年利率与年数匹配。

[OxfordAQA 9260 大纲 v5.1，PDF p.13](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf)。

9260/2E, **Specimen 2018**, Q15: [QP PDF p.12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=12), [MS PDF p.8](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8).

上述试题与配套评分页用于核对教学要求，本页未复刻官方试题。所有示范与任务均为自拟题，无官方分值；情境和图中数据为教学构造。

</details>
