---
title: "Normal distribution: distance from the mean"
layout: subjects
mathjax: true
grade: a2
subject: s2
reading_layout: true
study_page: true
permalink: /alevel/a2-mathematics/statistics/normal-distribution/
toc_headings: "#shape, #standardise, #tables, #inverse, #parameters, #normal-sums, #retry, #later-review, #next-step"
---

[A2 Statistics](/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

Is a result 5 units above average unusually large? That depends on whether ordinary variation is 1 unit or 20 units. This lesson measures a deviation in standard deviations, then uses areas to calculate probabilities and work backwards.

You need [continuous probability as area](/alevel/a2-mathematics/statistics/continuous-random-variables/) and algebra. The preceding lesson is [exponential distribution](/alevel/a2-mathematics/statistics/exponential-distribution/); its one-sided shape contrasts with the symmetric model here. All unlabelled examples and tasks are author-created with constructed data and no official marks. Work on paper before opening help.

## Centre, width and area {#shape}

A normal distribution is a continuous, symmetric bell-shaped model. Most values lie near the centre; equal distances to its left and right have matching density heights and matching areas. The tails continue indefinitely. A real quantity need not be normal just because it has a mean and a standard deviation.

$$X\sim N(\mu,\sigma^2),\qquad \sigma>0.$$

The mean $\mu$ locates the centre and equals the median and mode. The second parameter is the variance $\sigma^2$, not the standard deviation. The standard deviation $\sigma$ controls width: a larger value spreads the same total area 1 over a wider range, lowering the peak.

![A symmetric normal density centred at mu, with the region from mu minus sigma to mu plus sigma shaded and labelled approximately 0.683.](/assets/img/ma04-normal-area.svg)

About 68.3%, roughly two thirds, of the area lies within one standard deviation of the mean. Each outside tail is about 15.9%. This describes a long-run proportion, not a guarantee that two of every three observations fall inside. Exact endpoints have zero probability.

$$P(\mu-\sigma<X<\mu+\sigma)\approx0.683.$$

For $X\sim N(50,9)$, $\sigma=3$, so about two thirds lie between 47 and 53. Treat “bell-shaped” as a modelling decision supported by context or data. For a non-negative measurement, check whether the model assigns an appreciable probability below zero; if so, the model is unsuitable there.

<section class="lesson-check" markdown="1">

### Try it {#check-shape}

**Question:** A measurement is modelled by $X\sim N(12,4)$. State its median and standard deviation. Give an interval containing approximately two thirds of observations, and estimate $P(X>14)$. A second model for a non-negative duration is $T\sim N(1,9)$. Explain one concern about it.

<details markdown="1"><summary>Hint</summary>

Identify the variance parameter before finding a distance from the centre. Consider the second model below zero.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

The median is 12 and the standard deviation is 2. The interval is $(10,14)$; $P(X>14)\approx(1-0.683)/2\approx0.159$. For the duration, standard deviation 3 is large relative to mean 1, giving substantial probability below zero, which is impossible for a duration. If you used 4 as the standard deviation or confused height with area, revisit [shape](#shape), then [retry](#retry-shape).

</details>

</section>

## Measure distance in standard deviations {#standardise}

Subtracting $\mu$ moves the centre to zero. Dividing by the positive $\sigma$ makes one standard deviation equal to one unit. A negative standardised value lies left of the mean; a positive one lies right. The probability area is preserved even though the horizontal scale changes.

$$\begin{aligned}
Z&=\frac{X-\mu}{\sigma},\\
Z&\sim N(0,1).
\end{aligned}$$

For example, a value 56 from $N(50,9)$ is two standard deviations above the mean: $(56-50)/3=2$. Dividing by the variance 9 would measure the wrong distance.

## Read the area a table actually gives {#tables}

Define $\Phi(z)=P(Z\le z)$, the area to the left of $z$. The small teaching table below gives left cumulative areas, rounded to four decimals. In a full table, row 1.2 and column 0.03 give $\Phi(1.23)$. Read the table heading before calculating; not all normal tables use this convention.

| $z$ | $\Phi(z)$ |
|---|---|
| 0.00 | 0.5000 |
| 0.50 | 0.6915 |
| 1.00 | 0.8413 |
| 1.23 | 0.8907 |
| 1.50 | 0.9332 |
| 1.96 | 0.9750 |
| 2.00 | 0.9772 |

Symmetry gives the negative side. A right tail is what remains after removing the left area; a middle band is the difference of two left areas.

$$\begin{aligned}
\Phi(-z)&=1-\Phi(z),\\
P(Z>z)&=1-\Phi(z),\\
P(a<Z<b)&=\Phi(b)-\Phi(a).
\end{aligned}$$

If a table gives $A(z)=P(0<Z<z)$ for $z>0$, then $\Phi(z)=0.5+A(z)$ and $\Phi(-z)=0.5-A(z)$. If it gives upper-tail percentage points, an entry $u$ for tail probability $p$ means $P(Z>u)=p$, so $\Phi(u)=1-p$. Do not subtract 0.5 or 1 until you know which area was tabulated.

<section class="worked-example" markdown="1">

### Translate the event before reading the table

**Question:** Let $X\sim N(100,16)$. Find $P(X>106)$ and $P(96<X<108)$ to three significant figures.

The standard deviation is 4. A boundary at 106 is above the mean, so its right-tail probability should be less than 0.5.

$$\begin{aligned}
P(X>106)&=P(Z>1.5)\\
 &=1-0.9332\\
 &\approx0.0668.
\end{aligned}$$

$$\begin{aligned}
P(96<X<108)&=P(-1<Z<2)\\
 &=\Phi(2)-\Phi(-1)\\
 &=0.9772-(1-0.8413)\\
 &=0.8185\approx0.819.
\end{aligned}$$

The band contains the mean and extends further right than left. Subtract cumulative areas, not the boundary heights. Keep guard digits until the final rounding. Small last-digit differences may result from rounded tables.

</section>

<section class="lesson-check" markdown="1">

### Try it {#check-probability}

**Question:** A filling amount is modelled by $X\sim N(20,4)$. Find $P(X<19)$, $P(X>22)$ and $P(19<X<23)$ to three significant figures. Explain why $P(X=20)$ is not 0.5.

<details markdown="1"><summary>Hint</summary>

Draw the three shaded events. Convert each boundary to a distance in standard deviations.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$$\begin{aligned}
P(X<19)&=\Phi(-0.5)\\
 &=1-0.6915=0.3085\\
 &\approx0.309,\\
P(X>22)&=1-\Phi(1)\\
 &=0.1587\approx0.159,\\
P(19<X<23)&=\Phi(1.5)-\Phi(-0.5)\\
 &=0.9332-0.3085\\
 &=0.6247\approx0.625.
\end{aligned}$$

$P(X=20)=0$: a point has no area. $P(X\le20)=0.5$ includes the entire left half. For tail errors revisit [tables](#tables); for scaling errors [standardisation](#standardise), then [retry](#retry-probability).

</details>

</section>

## Work backwards from an area {#inverse}

First translate the given area into a left cumulative probability. Find the corresponding standard normal value, then undo the standardisation. A boundary below the mean must have a negative $z$.

$$x=\mu+\sigma z.$$

Useful percentage points are listed below; these are standard normal quantiles, not measured data. A table may supply fewer digits. Rounding $z$ to two decimal places is accepted by the specification; interpolation is not essential. For multiple unknowns, retain the supplied digits through the simultaneous equations.

| Left probability $p$ | $z$ with $\Phi(z)=p$ |
|---|---|
| 0.10 | $-1.2816$ |
| 0.20 | $-0.8416$ |
| 0.80 | $0.8416$ |
| 0.90 | $1.2816$ |
| 0.95 | $1.6449$ |
| 0.975 | $1.9600$ |

<section class="worked-example" markdown="1">

### A cutoff and an unknown centre

**Question:** (a) $X\sim N(40,25)$. Find $c$ such that $P(X>c)=0.05$. (b) $Y\sim N(\mu,16)$ and $P(Y<20)=0.9$. Find $\mu$. Give answers to three significant figures.

For (a), the left area is 0.95, so $z=1.6449$. For (b), the left area is 0.9; the boundary 20 is above the unknown mean, not below it.

$$\begin{aligned}
c&=40+5(1.6449)\\
 &=48.2245\approx48.2.
\end{aligned}$$

$$\begin{aligned}
\frac{20-\mu}{4}&=1.2816,\\
\mu&=20-4(1.2816)\\
 &=14.8736\approx14.9.
\end{aligned}$$

Check the signs: $c>40$ and $20>\mu$, as the areas require.

</section>

<section class="lesson-check" markdown="1">

### Try it {#check-inverse}

**Question:** (a) $X\sim N(30,9)$. Find the central interval symmetric about the mean containing probability 0.90. (b) $Y\sim N(10,\sigma^2)$ and $P(Y<14)=0.975$. Find $\sigma$. Give answers to three significant figures.

<details markdown="1"><summary>Hint</summary>

For a central area, divide the outside area between the two tails. For the unknown spread, require a positive standard deviation.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

For (a), each tail is 0.05, so the endpoints use $z=\pm1.6449$.

$$\begin{aligned}
a&=30-3(1.6449)\approx25.1,\\
b&=30+3(1.6449)\approx34.9.
\end{aligned}$$

For (b),

$$\begin{aligned}
\frac{14-10}{\sigma}&=1.96,\\
\sigma&=4/1.96\approx2.04.
\end{aligned}$$

Using $z=1.2816$ in (a) would leave 0.10 in each tail, not in total. Revisit [inverse areas](#inverse), then [retry](#retry-inverse).

</details>

</section>

## Two unknowns need two pieces of information {#parameters}

One percentile gives one equation linking centre and spread. Many pairs of values could satisfy it. A second distinct percentile fixes another point on the same model; subtract the equations to isolate the standard deviation.

<section class="worked-example" markdown="1">

### Two observed proportions

**Question:** A mass $X$ is modelled by $N(\mu,\sigma^2)$. It exceeds 3.8 kg with probability 0.20 and is below 1.9 kg with probability 0.10. Find $\mu$ and $\sigma$ to three significant figures. (Adapted from OxfordAQA MA04 January 2025 Q5(a).)

The upper condition means a left area of 0.80, giving $z=0.8416$. The lower condition already gives a left area of 0.10, so $z=-1.2816$. Keep the negative sign.

$$\begin{aligned}
3.8&=\mu+0.8416\sigma,\\
1.9&=\mu-1.2816\sigma.
\end{aligned}$$

$$\begin{aligned}
3.8-1.9&=(0.8416+1.2816)\sigma,\\
1.9&=2.1232\sigma,\\
\sigma&=\frac{1.9}{2.1232}\\
 &\approx0.8948757,\\
\mu&=1.9+1.2816\sigma\\
 &\approx3.0468726.
\end{aligned}$$

Thus $\mu=3.05$ kg and $\sigma=0.895$ kg to three significant figures. The mean lies between the two boundaries and closer to 3.8 than to 1.9, consistent with their different standardised distances. Substitution into the two unrounded equations recovers the intended percentiles. These model probabilities describe the stated population; they do not establish that all masses are normally distributed.

</section>

<section class="lesson-check" markdown="1">

### Try it {#check-parameters}

**Question:** A length $L$ is modelled by $N(\mu,\sigma^2)$. It is below 8 cm with probability 0.20 and above 14 cm with probability 0.10. Find $\mu$ and $\sigma$ to three significant figures. Give two equations before solving.

<details markdown="1"><summary>Hint</summary>

Translate both conditions into left cumulative probabilities and attach a signed z-value to each boundary.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$$\begin{aligned}
8&=\mu-0.8416\sigma,\\
14&=\mu+1.2816\sigma,\\
6&=2.1232\sigma,\\
\sigma&\approx2.82592\approx2.83,\\
\mu&=8+0.8416\sigma\\
 &\approx10.3783\approx10.4.
\end{aligned}$$

The spread is positive and the centre lies between 8 and 14. If you used 0.10 as the left area at 14, revisit [two parameters](#parameters), then [retry](#retry-parameters).

</details>

</section>

## When a total is also normal {#normal-sums}

In the continuous-variable lesson, independence allowed variances to add. Here there is extra information: each component is normal. A linear combination of independent normal variables is exactly normal, not merely approximately normal. We use this result without proving it.

$$\begin{aligned}
X_i&\sim N(\mu_i,\sigma_i^2),\\
S&=\sum_{i=1}^n a_iX_i+c,\\
\mu_S&=\sum_{i=1}^n a_i\mu_i+c,\\
\sigma_S^2&=\sum_{i=1}^n a_i^2\sigma_i^2,\\
S&\sim N(\mu_S,\sigma_S^2).
\end{aligned}$$

The $X_i$ must be mutually independent for this rule. A difference is a negative coefficient, so its variance contribution is still positive. In particular, for independent $X\sim N(\mu_X,\sigma_X^2)$ and $Y\sim N(\mu_Y,\sigma_Y^2)$:

$$\begin{aligned}
X+Y&\sim N(m_+,v),\\
X-Y&\sim N(m_-,v),\\
m_+&=\mu_X+\mu_Y,\\
m_-&=\mu_X-\mu_Y,\\
v&=\sigma_X^2+\sigma_Y^2.
\end{aligned}$$

For dependent components the simple variance sum need not hold. If the components are not normal, their sum is not automatically normal. Do not invoke a large-sample approximation for only a few arbitrary components.

<section class="worked-example" markdown="1">

### A total and its tail

**Question:** Independent component masses satisfy $A\sim N(10,1)$, $B\sim N(12,4)$ and $C\sim N(8,4)$. A fixed wrapper has mass 2. Find the distribution of $S=A+B+C+2$ and $P(S>35)$ to three significant figures.

All three random components are independent and normal. The fixed wrapper moves the mean but adds no variance.

$$\begin{aligned}
E(S)&=10+12+8+2=32,\\
\operatorname{Var}(S)&=1+4+4=9,\\
S&\sim N(32,9),\\
P(S>35)&=P(Z>1)\\
 &=1-0.8413\approx0.159.
\end{aligned}$$

The standard deviation of the total is $\sqrt9=3$, not the sum of the three standard deviations. Only after finding this spread can we standardise the total.

</section>

<section class="lesson-check" markdown="1">

### Try it {#check-sums}

**Question:** Three independent normal measurements $A,B,C$ have means 5, 4, 3 and variances 1, 4, 4. Define $D=2A-B+C$. Find its distribution and $P(D>15)$ to three significant figures. Compare the distributions of $A_1+A_2+A_3$ and $3A$, where $A_1,A_2,A_3$ are independent copies of $A$.

<details markdown="1"><summary>Hint</summary>

Check the conditions for the shape, then find signed means and squared-coefficient variances.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$$\begin{aligned}
E(D)&=10-4+3=9,\\
\operatorname{Var}(D)&=4+4+4=12,\\
D&\sim N(9,12),\\
P(D>15)&=P(Z>\sqrt3)\\
 &\approx1-\Phi(1.73)\\
 &\approx0.0418.
\end{aligned}$$

Using the unrounded $\sqrt3$ gives about 0.0416; the table-rounded result is acceptable. The independent sum is $N(15,3)$, whereas $3A\sim N(15,9)$. They have equal means but different spreads. For coefficient or shape errors revisit [normal sums](#normal-sums), then [retry](#retry-sums).

</details>

</section>

## Try again after repairing one difficulty {#retry}

Close earlier answers. Select the task corresponding to your error and explain your choices, not just the final number.

<section class="lesson-check" markdown="1">

### Try it {#retry-shape}

**Question:** $Y\sim N(40,36)$. Give its mean, variance and standard deviation, an interval containing approximately two thirds of its values, and an estimate of $P(Y<34)$. Does symmetry alone prove that an arbitrary distribution is normal?

<details markdown="1"><summary>Hint</summary>

Use the notation carefully and think about what information symmetry does and does not supply.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

The mean is 40, variance 36 and standard deviation 6. The interval is $(34,46)$ and the lower tail is about 0.159. Symmetry alone does not establish a bell-shaped normal density; a uniform density is symmetric too. Revisit [shape](#shape) for parameter or model errors.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-probability}

**Question:** $T\sim N(50,16)$. Find $P(T<44)$ and $P(48<T<54)$ to three significant figures.

<details markdown="1"><summary>Hint</summary>

Mark both standardised endpoints, including their signs.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$$\begin{aligned}
P(T<44)&=\Phi(-1.5)\\
 &=0.0668,\\
P(48<T<54)&=\Phi(1)-\Phi(-0.5)\\
 &=0.8413-0.3085\\
 &=0.5328\approx0.533.
\end{aligned}$$

Both areas are positive and below 1. For a negative-boundary error revisit [tables](#tables).

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-inverse}

**Question:** (a) $X\sim N(70,64)$. Find the lower boundary $b$ such that $P(X<b)=0.20$. (b) $Y\sim N(\mu,9)$ and $P(Y>17)=0.10$. Find $\mu$. (c) $W\sim N(20,\sigma^2)$ and $P(W<18)=0.20$. Find $\sigma$. Give answers to three significant figures.

<details markdown="1"><summary>Hint</summary>

A left area below 0.5 gives a negative z-value. A right tail of 0.1 leaves 0.9 on the left.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$$\begin{aligned}
b&=70-8(0.8416)\approx63.3,\\
17&=\mu+3(1.2816),\\
\mu&=13.1552\approx13.2,\\
\frac{18-20}{\sigma}&=-0.8416,\\
\sigma&=2/0.8416\approx2.38.
\end{aligned}$$

Each boundary is on the side of its mean required by its area. Revisit [inverse](#inverse) if a sign was reversed.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-parameters}

**Question:** A normal variable $X$ satisfies $P(X<4)=0.10$ and $P(X>10)=0.10$. Find its mean and standard deviation to three significant figures. Explain how symmetry checks your mean.

<details markdown="1"><summary>Hint</summary>

The two outside tails have equal area.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$$\begin{aligned}
4&=\mu-1.2816\sigma,\\
10&=\mu+1.2816\sigma,\\
\mu&=7,\\
\sigma&=3/1.2816\approx2.34.
\end{aligned}$$

Equal tail areas put the mean at the midpoint, 7. For simultaneous-equation errors revisit [parameters](#parameters).

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-sums}

**Question:** Four independent normal times $T_1,T_2,T_3,T_4$ each have mean 5 minutes and variance 1 minute squared. Let $S=T_1+T_2+T_3+T_4$. Find its distribution and $P(S<18)$ to three significant figures. Find the distribution of $T_1-T_2$.

<details markdown="1"><summary>Hint</summary>

Find the variance before taking its square root for standardisation.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$S\sim N(20,4)$, so $P(S<18)=\Phi(-1)\approx0.159$. The difference is $N(0,2)$: its variance is $1+1$, not zero. The exact normal result uses independence and normality of the components. Revisit [normal sums](#normal-sums) for a missed condition.

</details>

</section>

## Return after another topic {#later-review}

Choose your own sequence of steps without looking back at the worked examples. Record whether you could explain the distribution before calculating.

<section class="lesson-check" markdown="1">

### Try it {#review-task}

**Question:** Two independent rods have lengths $A\sim N(40,4)$ and $B\sim N(30,5)$ in centimetres. A fixed 1 cm overlap gives assembled length $L=A+B-1$. Find $P(66<L<72)$. Find $c$ such that $P(L>c)=0.10$. State what would need reconsidering if the rod lengths were dependent. Give numerical answers to three significant figures.

<details markdown="1"><summary>Hint</summary>

Which quantities change the centre, which change the spread, and which area is requested?

</details>

<details markdown="1"><summary>Answer and feedback</summary>

Independence and normality give $L\sim N(69,9)$.

$$\begin{aligned}
P(66<L<72)&=P(-1<Z<1)\\
 &=2(0.8413)-1\\
 &=0.6826\approx0.683,\\
c&=69+3(1.2816)\\
 &=72.8448\approx72.8.
\end{aligned}$$

With dependent lengths, variance 9 cannot be assumed; marginal normality alone also does not ensure that their sum is normal. For shape or variance errors revisit [normal sums](#normal-sums); for the cutoff revisit [inverse](#inverse). Then close this solution and do the matching retry.

</details>

</section>

## Next: what changes for a sample average? {#next-step}

Continue to [estimation](/alevel/a2-mathematics/statistics/estimation/). A sample mean averages independent observations, so its spread differs from the spread of an individual observation.

<details markdown="1"><summary>Sources and scope</summary>

OxfordAQA 9660 v5.2 S2.4, printed p.26 / PDF p.25: [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Two-parameter example adapted from January 2025 Q5(a): [question paper PDF p.14](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=14), [paired final mark scheme PDF p.12](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=12). The numerical conditions are retained with shortened context; this is not a verbatim original question. Q5(b), PDF p.15, uses a sample mean and belongs with estimation. Other tasks are author-created. The teaching tables show standard normal cumulative probabilities and quantiles; no calculator-specific operation or student learning outcome is claimed as verified.

</details>

{% include exam_topic_practice.html %}
