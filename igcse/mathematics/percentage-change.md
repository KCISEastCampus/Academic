---
layout: subjects
title: "Percentage change"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/percentage-change/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)
{:.lesson-meta}

## Which amount is the percentage based on? {#start}

A 20% discount followed by a 20% increase does not usually restore the original price: the second percentage uses a different amount. This lesson keeps track of that reference amount, then uses it for interest and reverse problems. First be able to [find a part and a share](/igcse/mathematics/fractions-decimals-and-percentages/#find-part). All tasks are self-written, with no official marks.

## One multiplication can include the original amount {#multipliers}

The original is 100%. After a 15% decrease, 85% remains, giving multiplier 0.85. After a 15% increase, 115% remains, giving multiplier 1.15. For an original quantity $P$ and a percentage number $r$:

$$\text{new}=P\left(1+\frac r{100}\right)\quad\text{for an increase},$$

$$\text{new}=P\left(1-\frac r{100}\right)\quad\text{for a decrease}.$$

For a positive original, the signed percentage change is:

$$\frac{\text{new}-\text{original}}{\text{original}}\times100\%.$$

The denominator is the original, not the new amount. A negative answer means a decrease. For these ordinary price models, a decrease lies between 0% and 100%.

<div class="worked-example" markdown="1">

### A discount, then a price rise {#example-change}

**Question:** A price of 80 dollars is reduced by 15%, then the reduced price is increased by 10%. Find the final price and the overall percentage change.

Each multiplier acts on the amount immediately before it:

$$80\times0.85=68,\qquad68\times1.10=74.80.$$

The final price is 74.80 dollars. Compare this with the original 80:

$$\frac{74.8-80}{80}\times100\%=-6.5\%.$$

The overall change is a 6.5% decrease, not 15%-10%=5%. Check by combining multipliers: $0.85\times1.10=0.935$, so 93.5% of the original remains.

</div>

If a pass rate changes from 40% to 50%, it rises by 10 percentage points, but by 25% relative to the original rate. The first subtracts the two displayed percentage numbers; the second compares that change with the original 40. These statements answer different questions.

## Does the interest use the original or the growing balance? {#interest}

Simple interest pays the same percentage of the original principal each year. Compound interest adds interest to the balance, so later interest also earns interest. The rate and the time period must match. The examples assume no deposits, withdrawals, fees or change of rate.

<div class="worked-example" markdown="1">

### Follow every year {#example-interest}

**Question:** 1000 dollars is invested for 3 years at 10% per year. Compare simple and compound interest.

With simple interest, every year adds 10% of the original 1000, which is 100:

$$1000+100=1100,\quad1100+100=1200,\quad1200+100=1300.$$

The final amount is 1300, including 300 interest. With compound interest, multiply the latest balance by 1.10:

$$1000\times1.10=1100,$$

$$1100\times1.10=1210,$$

$$1210\times1.10=1331.$$

The final amount is 1331, including 331 interest. The first year agrees; later years differ because compound interest uses 1100 and 1210, not always 1000. Keep full values during a model calculation and round the final money answer as requested; a real account may specify a different rounding convention.

</div>

## Try the changed situations {#practice}

<div class="lesson-check" markdown="1">

### Compare both directions {#practice-change}

**Question:** A price falls from 120 dollars to 90 dollars. Find the percentage decrease. It later returns to 120 dollars. Find the percentage increase from 90. Separately, a rate rises from 30% to 36%; state its increase in percentage points and its relative percentage increase.

<details markdown="1">
<summary>Hint</summary>

State the original amount for each comparison before calculating.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{120-90}{120}\times100\%=25\%,\qquad
\frac{120-90}{90}\times100\%=33\frac13\%.$$

The reference amounts are 120 and 90 respectively. The rate rises by 6 percentage points, and its relative increase is:

$$\frac{36-30}{30}\times100\%=20\%.$$

A percentage-point difference is not the same calculation as a percentage change.

</details>

</div>

<div class="lesson-check" markdown="1">

### Track the balance {#practice-interest}

**Question:** 800 dollars is invested for 2 years at 5% per year. Account A uses simple interest; account B uses compound interest. Find the final amount and interest in each. A separate item worth 800 dollars loses 5% of its current value each year; find its value after 2 years.

<details markdown="1">
<summary>Hint</summary>

For the first account keep the same yearly addition; for the others update the base each year.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Simple interest adds 40 each year:

$$800+40+40=880.$$

The interest is 80. Compound interest gives:

$$800\times1.05=840,\qquad840\times1.05=882.$$

The interest is 82. Repeated depreciation uses 0.95, not a fixed subtraction:

$$800\times0.95=760,\qquad760\times0.95=722.$$

The second year's loss is 38, smaller than the first year's 40. Subtracting 40 twice would describe a different model.

</details>

</div>

## work back through the multiplier {#reverse}

<div class="worked-example" markdown="1">

### Recover the original {#example-reverse}

**Question:** A sale price of 96 dollars is 20% below the original price. Find the original price.

The 96 dollars represents 80% of the original, not 100%. Let the original be $P$:

$$0.80P=96,\qquad P=96\div0.80=120.$$

Check by going forward: $120\times0.80=96$. Increasing 96 by 20% gives 115.20, which fails the forward check; that 20% would use the wrong base.

</div>

<div class="lesson-check" markdown="1">

### Find the missing starting point {#practice-reverse}

**Question:** An item costs 72 dollars after a 10% discount. Find its original price. The sale price is then increased by 25%. Find the final price and its overall percentage change from the original.

<details markdown="1">
<summary>Hint</summary>

First undo 0.90, then apply 1.25 to the stated sale price.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$P=72\div0.90=80,\qquad72\times1.25=90.$$

$$\frac{90-80}{80}\times100\%=12.5\%.$$

The final price is 90 dollars, an overall 12.5% increase. Check: $0.90\times1.25=1.125$.

</details>

</div>

## a formula records the repeated process {#formula-model}

With constant annual percentage rate $r$, principal $P$ and $n$ whole years, the multiplier is used once per year:

$$V=P\left(1+\frac r{100}\right)^n.$$

Here $V$ is the final amount including interest; interest alone is $V-P$. This is the compound-interest formula. For decay, replace the plus by a minus. Do not put an annual rate into a monthly exponent without specifying a compatible model.

If 1500 grows at 3% annually, the model is $V=1500(1.03)^n$. To find when it first exceeds 1600 at a year end, test successive whole years, keeping the chain visible:

$$V_1=1545,\quad V_2=1591.35,\quad V_3=1639.0905.$$

Since the balance increases each year, year 2 is still below and year 3 is above; the first such year is 3. No logarithms or fractional-year account rule is needed.

<div class="lesson-check" markdown="1">

### Build and use a model {#practice-model}

**Question:** An investment of 2000 dollars becomes 2420 dollars after 2 years of compound interest at a constant positive annual rate. Find the rate. A separate 1000-dollar investment earns 8% compound interest annually. Write its value after n years and find the first year end when it exceeds 1200 dollars. State your assumptions.

<details markdown="1">
<summary>Hint</summary>

For the unknown rate, find the positive annual multiplier whose square is 2420/2000. For the threshold, test successive year ends.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Let $q$ be the positive annual multiplier:

$$q^2=\frac{2420}{2000}=1.21,\qquad q=1.10.$$

The rate is 10% per year; the negative square root cannot be an ordinary positive balance multiplier. For the other investment:

$$V=1000(1.08)^n.$$

$$V_1=1080,\quad V_2=1166.4,\quad V_3=1259.712.$$

It first exceeds 1200 at the end of year 3; year 2 does not. Assume constant annual rate, annual compounding and no deposits, withdrawals or fees. Keeping only the last value without checking the preceding year would not establish “first”.

</details>

</div>

## Repair the reference amount {#retry}

Wrong overall change: return to [multipliers](#multipliers). Confusing principal and interest: return to [the year-by-year comparison](#interest). A reverse problem needs [division by the multiplier](#reverse); a threshold needs [the preceding year](#formula-model).

<div class="lesson-check" markdown="1">

### Retry the change {#retry-change}

**Question:** A price of 200 dollars rises by 10%, then falls by 10%. Find the final price and the overall percentage change. A rate falls from 50% to 40%; state its percentage-point decrease and relative percentage decrease.

<details markdown="1">
<summary>Hint</summary>

Each step uses its own current base.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$200\times1.10=220,\quad220\times0.90=198,\quad
\frac{198-200}{200}\times100\%=-1\%.$$

The overall decrease is 1%. The rate decreases by 10 percentage points, or 20% relative to the original 50. Equal percentage rise and fall do not cancel, because their bases differ.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry the interest {#retry-interest}

**Question:** 600 dollars earns 4% per year for 2 years. Compare the total interest with simple interest and compound interest.

<details markdown="1">
<summary>Hint</summary>

The first yearly interest is 24 in both models.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$I_{\text{simple}}=24+24=48.$$

$$600\times1.04=624,\quad624\times1.04=648.96,\quad I_{\text{compound}}=648.96-600=48.96.$$

Compound interest is 0.96 larger because the first year's 24 also earns 4%.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry in reverse {#retry-reverse}

**Question:** A bill is 138 dollars after a 15% increase. Find the original bill and verify it.

<details markdown="1">
<summary>Hint</summary>

138 represents 115% of the original.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$P=138\div1.15=120,\qquad120\times1.15=138.$$

Subtracting 15% of 138 would use the wrong reference amount.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry the model {#retry-model}

**Question:** 500 dollars earns 10% compound interest per year. Write a formula for its value after n years. Find the first year end when it exceeds 650 dollars. What is the interest at that time? Separately, an investment of 600 dollars becomes 636.54 dollars after 2 years at a constant positive annual compound-interest rate, with no deposits, withdrawals or fees. Find that annual rate and check your result forwards.

<details markdown="1">
<summary>Hint</summary>

Check every preceding year end until the threshold is crossed. For the second investment, find the positive annual multiplier whose square is the final-to-initial ratio.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$V=500(1.10)^n,\quad V_1=550,\quad V_2=605,\quad V_3=665.5.$$

The first year is 3; the interest is $665.5-500=165.5$ dollars. These are year-end values under the stated annual compounding model.

For the separate investment, let $q$ be its positive annual multiplier:

$$q^2=\frac{636.54}{600}=1.0609,\qquad q=\sqrt{1.0609}=1.03,\qquad r=(1.03-1)\times100=3\%.$$

The annual rate is 3%. We take the positive square root because an ordinary positive balance uses a positive multiplier. Check the whole two-year process:

$$600\times1.03=618,\qquad618\times1.03=636.54.$$

The total two-year growth of 6.09% is not the annual rate; each year acts on the preceding balance.

</details>

</div>

## Apply the multiplier outside money {#next-step}

Continue to [ratio and proportion](/igcse/mathematics/ratio-and-proportion/#start), where repeated factors describe populations and other quantities. After that, return through [mixed number review](/igcse/mathematics/mixed-review/#number-review), with no method named in advance.

## Scope and sources {#sources}

<details markdown="1">
<summary>Scope, tier and reference reading</summary>

N15: percentage increase/decrease, simple interest, compound interest, reverse percentages and use of the compound-interest formula. The models use matched annual periods.

[OxfordAQA 9260 specification v5.1, PDF p.13](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf).

9260/2E, **Specimen 2018**, Q15: [QP PDF p.12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=12), [MS PDF p.8](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8).

The paired pages above informed the teaching; no official question is reproduced here. All examples and tasks are self-written, with no official marks. Contexts and diagram data are constructed for learning.

</details>
