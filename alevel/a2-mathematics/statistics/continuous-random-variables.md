---
title: "Continuous random variables: probability as area"
layout: subjects
mathjax: true
grade: a2
subject: s2
reading_layout: true
study_page: true
permalink: /alevel/a2-mathematics/statistics/continuous-random-variables/
toc_headings: "#density, #area, #cdf, #quantiles, #moments, #linear, #functions, #combinations, #retry, #later-review, #next-step"
---

[A2 Statistics](/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

A message count jumps between integers. A waiting time can be 2.1 seconds, 2.11 seconds, or anywhere between. Without separate probability bars, how do we describe the chance of a result?

You will use areas, build cumulative probabilities, and find the average and spread of transformed values and totals. You need definite integrals and weighted averages: revisit [integration](/alevel/a2-mathematics/integration/) when needed. The preceding lesson is [Poisson distribution](/alevel/a2-mathematics/statistics/poisson-distribution/). Except for the labelled adapted example, all examples and tasks are author-created with constructed data and no official marks. Try tasks on paper before revealing help.

## Why a height is not a probability {#density}

A continuous random variable models values throughout intervals. In a density model a single exact value has probability zero, because its width is zero. This does not say that the value is impossible. A rounded reading such as “2.1 s” represents a small interval and may have positive probability.

The density $f(x)$ describes how tightly probability is packed near $x$. A thin strip has approximate probability $f(x)\Delta x$: height times width. Adding strips becomes an integral. If $x$ is in seconds, density has units per second; probability has no units.

$$P(a<X<b)=\int_a^b f(x)\,dx.$$

Thus $P(X=a)=0$ and including or excluding endpoints makes no difference for this continuous model. Do not apply this to discrete counts.

## Which curves can be densities? {#area}

Probability cannot be negative and the total probability must be 1. A density is non-negative on its support, zero outside it, and integrates to 1 over the whole range. A height above 1 is allowed; an area above 1 is not.

<section class="worked-example" markdown="1">

### An increasing density

**Question:** Let $f(x)=kx$ for $0\le x\le2$, and zero otherwise. Find $k$ and $P(1<X\le2)$.

Use the total area to fix the scale, then integrate only the requested interval.

$$\begin{aligned}
1&=\int_0^2 kx\,dx\\
 &=k\left[\frac{x^2}{2}\right]_0^2\\
 &=k(2-0),\quad k=\frac12.
\end{aligned}$$

$$\begin{aligned}
P(1<X\le2)&=\int_1^2\frac{x}{2}\,dx\\
 &=\left[\frac{x^2}{4}\right]_1^2\\
 &=1-\frac14=\frac34.
\end{aligned}$$

The density is non-negative. The right half contains more than half the probability because the curve is higher there; the answer remains below 1.

</section>

![Density rises from (0,0) to (2,1). The area under the curve between 1 and 2 is shaded; the vertical axis is density.](/assets/img/ma04-density-area.svg)

The shaded area represents the event. The vertical line at 1 adds no area.

<section class="lesson-check" markdown="1">

### Try it {#check-area}

**Question:** A proposed density is $f(x)=c$ on $0\le x\le0.25$ and zero elsewhere. Find $c$, $P(X=0.1)$ and $P(X>0.1)$. A second proposal is $h(x)=2x-1$ on $0\le x\le2$, zero elsewhere. Can it be a density? Justify your decisions.

<details markdown="1"><summary>Hint</summary>

Check non-negativity and total area separately. Distinguish points from intervals.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$0.25c=1$, so $c=4$. The height is allowed. $P(X=0.1)=0$ and $P(X>0.1)=4(0.25-0.1)=0.6$. The second proposal is negative for $x<0.5$ and has total integral 2, so fails both conditions. If you used height as probability, revisit [area](#area), then [retry](#retry-area).

</details>

</section>

## Keep a running total {#cdf}

The cumulative distribution function (CDF) $F(x)$ is the probability already collected at or below $x$. It starts at 0, never decreases, and ends at 1. For a density model it is continuous even if the density jumps. Where differentiable, its slope is the density.

$$\begin{aligned}
F(x)&=P(X\le x)\\
 &=\int_{-\infty}^x f(t)\,dt,\\
f(x)&=F'(x).
\end{aligned}$$

$$P(a<X\le b)=F(b)-F(a).$$

For the density $x/2$ above, accumulation begins at 0 and finishes at 2. Check the joins, not just the middle formula.

$$F(x)=\begin{cases}
0,&x<0,\\
x^2/4,&0\le x\le2,\\
1,&x>2.
\end{cases}$$

The middle expression gives 0 at 0 and 1 at 2. If a density has several pieces, carry earlier area into each later piece. Do not restart the total at zero.

<section class="worked-example" markdown="1">

### Across a density join

**Question:** The density of $T$ is $ct^3$ on $2\le t\le4$, $1/10$ on $4<t\le6$, and zero otherwise. Find $c$ and its full CDF. (Adapted from OxfordAQA MA04 January 2025 Q2.)

Split at 4 because the density rule changes there.

$$\begin{aligned}
1&=\int_2^4 ct^3\,dt+\int_4^6\frac1{10}\,dt\\
 &=c\left[\frac{t^4}{4}\right]_2^4
   +\left[\frac{t}{10}\right]_4^6\\
 &=60c+\frac15,\\
c&=\frac1{75}.
\end{aligned}$$

For $2\le t\le4$, integrate from 2 to $t$. At 4 we have collected $4/5$. For $4<t\le6$, add to that earlier area $4/5$ the rectangle from 4 to $t$.

$$F_T(t)=\begin{cases}
0,&t<2,\\
(t^4-16)/300,&2\le t\le4,\\
4/5+(t-4)/10,&4<t\le6,\\
1,&t>6.
\end{cases}$$

The joins give 0, $4/5$, and 1. Differentiating each interior branch recovers the density. A derivative at a corner is not needed to calculate probabilities.

</section>

## Find a boundary from an area {#quantiles}

A quantile reverses the calculation: find the point where accumulated probability reaches the required amount. Convert a right-tail probability into a left cumulative probability before solving. Check that the solution lies in the branch used.

The median $m$ splits the area in half, so $F(m)=0.5$. It need not equal the mean.

<section class="worked-example" markdown="1">

### A right-tail boundary

**Question:** For $f(x)=x/2$ on $0\le x\le2$, zero elsewhere, find $q$ such that $P(X>q)=0.1$.

The left side must contain 0.9. Use the CDF on the support.

$$\begin{aligned}
F(q)&=0.9,\\
q^2/4&=0.9,\\
q&=\sqrt{3.6}\approx1.897.
\end{aligned}$$

Reject the negative root because $0\le q\le2$. A high boundary makes sense for a small right tail.

</section>

<section class="lesson-check" markdown="1">

### Try it {#check-cdf}

**Question:** A CDF is 0 for $x<0$, $ax^2$ for $0\le x\le1$, $1-b(2-x)^2$ for $1<x\le2$, and 1 for $x>2$. Its density at $x=0.5$ is $0.6$. Find $a,b$, its density on the interior intervals, $P(0.5<X<1.5)$ and its median.

<details markdown="1"><summary>Hint</summary>

Use a derivative at 0.5 and continuity at 1. For the median, first find which branch contains cumulative probability 0.5.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$f(0.5)=2a(0.5)=0.6$, so $a=0.6$. Continuity at 1 gives $a=1-b$, hence $b=0.4$.

$$f(x)=\begin{cases}
1.2x,&0<x<1,\\
0.8(2-x),&1<x<2,\\
0,&x<0\text{ or }x>2.
\end{cases}$$

Density values at the isolated joins may be assigned arbitrarily without changing areas. $F(0.5)=0.15$, $F(1.5)=0.9$, giving probability $0.75$. Since $F(1)=0.6$, the median lies below 1:

$$m=\sqrt{5/6}\approx0.913.$$

If you differentiated with the wrong sign, revisit [CDF](#cdf). If you chose the wrong branch, revisit [quantiles](#quantiles), then [retry](#retry-cdf).

</details>

</section>

## An average with continuously varying weights {#moments}

For discrete values we add value times probability. For a thin continuous strip, the probability is approximately $f(x)\Delta x$. Multiplying by $x$ and adding strips gives the mean. To measure spread, average squared distances from that mean. Moments below require the integrals to exist.

$$\begin{aligned}
\mu=E(X)&=\int x f(x)\,dx,\\
E(X^2)&=\int x^2 f(x)\,dx,\\
\operatorname{Var}(X)&=E((X-\mu)^2)\\
 &=E(X^2)-\mu^2,\\
\operatorname{SD}(X)&=\sqrt{\operatorname{Var}(X)}.
\end{aligned}$$

Each integral covers the full support, splitting at density changes. Variance has squared units; standard deviation has the original units. The second moment is not the variance: subtract the square of the mean.

<section class="worked-example" markdown="1">

### Calculate and check spread

**Question:** For $f(x)=x/2$ on $0\le x\le2$, zero elsewhere, find $E(X)$, $\operatorname{Var}(X)$ and the standard deviation.

$$\begin{aligned}
E(X)&=\int_0^2 x\frac{x}{2}\,dx\\
 &=\left[\frac{x^3}{6}\right]_0^2=\frac43,\\
E(X^2)&=\int_0^2 x^2\frac{x}{2}\,dx\\
 &=\left[\frac{x^4}{8}\right]_0^2=2,\\
\operatorname{Var}(X)&=2-\left(\frac43\right)^2\\
 &=\frac29,\\
\operatorname{SD}(X)&=\frac{\sqrt2}{3}\approx0.471.
\end{aligned}$$

The mean lies in the support and to the right of 1, consistent with more area on the right. Variance is positive.

</section>

## Change a scale, shift a centre {#linear}

Adding a constant moves every result by the same amount, without changing distances between results. Multiplying by $a$ multiplies distances by its magnitude, so squared distances multiply by $a^2$.

$$\begin{aligned}
E(aX+b)&=aE(X)+b,\\
\operatorname{Var}(aX+b)&=a^2\operatorname{Var}(X),\\
\operatorname{SD}(aX+b)&=\lvert a\rvert\operatorname{SD}(X).
\end{aligned}$$

For $X$ in the preceding example, taking $Y=4-5X$ gives the mean is $4-5(4/3)=-8/3$, and the variance is $25(2/9)=50/9$. A minus sign reverses order but cannot make a variance negative.

<section class="lesson-check" markdown="1">

### Try it {#check-moments}

**Question:** A variable $U$ has density $3u^2$ on $0\le u\le1$, zero elsewhere. Find its mean, variance and standard deviation. A score is $S=10-4U$. Find its mean and variance, explaining the effect of the minus sign.

<details markdown="1"><summary>Hint</summary>

Find the first and second moments separately before transforming the score.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$$\begin{aligned}
E(U)&=\int_0^1 3u^3\,du
 =[3u^4/4]_0^1=\frac34,\\
E(U^2)&=\int_0^1 3u^4\,du
 =[3u^5/5]_0^1=\frac35,\\
\operatorname{Var}(U)&=\frac35-\frac9{16}
 =\frac3{80},\\
\operatorname{SD}(U)&=\sqrt{3/80}\approx0.194,\\
E(S)&=10-4(3/4)=7,\\
\operatorname{Var}(S)&=16(3/80)=\frac35.
\end{aligned}$$

The negative coefficient reverses the ordering; its square controls variance. If you used $E(U^2)$ alone, revisit [moments](#moments); for coefficient errors, revisit [scale changes](#linear), then [retry](#retry-moments).

</details>

</section>

## Average the output, not the average input {#functions}

For a curved transformation, a change in input does not cause a fixed change in output. In general $E(g(X))$ is not $g(E(X))$. For an input $x$, average the output $g(x)$ using the original density. No transformed density is needed for these moments.

$$\begin{aligned}
Y&=g(X),\\
E(Y)&=\int g(x)f(x)\,dx,\\
E(Y^2)&=\int (g(x))^2f(x)\,dx,\\
\operatorname{Var}(Y)&=E(Y^2)-[E(Y)]^2.
\end{aligned}$$

When calculating $E(Y^2)$, square the whole output $g(x)$. For $g(x)=5x^2$, use $25x^4$ there. For reciprocal functions, check the denominator and the existence of the required moments. The examples here keep the input away from zero; no improper-integral method is needed.

<section class="worked-example" markdown="1">

### A reciprocal output

**Question:** Let $X$ have density 1 on $1\le x\le2$, zero elsewhere. For $Y=6/X$, find $E(Y)$ and $\operatorname{Var}(Y)$.

Here $x\ge1$, so the denominator stays away from zero. Square $6/x$ before the second integral.

$$\begin{aligned}
E(Y)&=\int_1^2\frac6x\,dx\\
 &=6[\ln x]_1^2=6\ln2,\\
E(Y^2)&=\int_1^2\frac{36}{x^2}\,dx\\
 &=36[-x^{-1}]_1^2=18,\\
\operatorname{Var}(Y)&=18-36(\ln2)^2\\
 &\approx0.704.
\end{aligned}$$

The output lies between 3 and 6, and its mean is about 4.159, inside that range. It differs from $6/E(X)=4$.

</section>

<section class="lesson-check" markdown="1">

### Try it {#check-functions}

**Question:** Let $V$ have density 1 on $0\le v\le1$, zero elsewhere. A loss is $L=5V^2$. Find $E(L)$ and $\operatorname{Var}(L)$. Compare $E(L)$ with $5[E(V)]^2$.

<details markdown="1"><summary>Hint</summary>

Square the whole loss for its second moment.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$$\begin{aligned}
E(L)&=5\int_0^1v^2\,dv=\frac53,\\
E(L^2)&=25\int_0^1v^4\,dv=5,\\
\operatorname{Var}(L)&=5-\frac{25}{9}=\frac{20}{9}.
\end{aligned}$$

$E(V)=1/2$, so $5[E(V)]^2=5/4$, not $5/3$.

If you averaged the input before squaring, revisit [functions](#functions), then [retry](#retry-functions).

</details>

</section>

## Add different results, or repeat the same one? {#combinations}

A sum adds contributions to the mean. Subtracting a result reverses its contribution to the mean, but does not remove its uncertainty. For independent variables with finite variances, squared coefficients multiply the variances, which then add. Independence is required for this variance rule; linearity of expectation does not require it.

$$\begin{aligned}
E(aX\pm bY)&=aE(X)\pm bE(Y),\\
\operatorname{Var}(aX\pm bY)
 &=a^2\operatorname{Var}(X)\\
 &\quad+b^2\operatorname{Var}(Y).
\end{aligned}$$

$$\begin{aligned}
S&=\sum_{i=1}^n a_iX_i+c,\\
E(S)&=\sum_{i=1}^n a_iE(X_i)+c,\\
\operatorname{Var}(S)
 &=\sum_{i=1}^n a_i^2\operatorname{Var}(X_i).
\end{aligned}$$

The last rule assumes mutually independent $X_i$. Without independence, covariance terms may be needed, so these moments alone do not determine the variance of the total. Knowing a mean and variance does not determine a distribution shape.

<section class="worked-example" markdown="1">

### Three independent contributions

**Question:** Independent continuous variables $A,B,C$ have means $2,3,4$ and variances $1,4,9$, respectively. Find the mean, variance and standard deviation of $W=2A-B+C+5$. Compare the variance of $A_1+A_2+A_3$ with that of $3A$, where $A_1,A_2,A_3$ are independent copies of $A$.

Use a signed sum for the mean and a sum of squared-coefficient contributions for the variance.

$$\begin{aligned}
E(W)&=2(2)-3+4+5=10,\\
\operatorname{Var}(W)&=4(1)+4+9=17,\\
\operatorname{SD}(W)&=\sqrt{17}\approx4.12.
\end{aligned}$$

$$\begin{aligned}
\operatorname{Var}(A_1+A_2+A_3)&=3,\\
\operatorname{Var}(3A)&=9.
\end{aligned}$$

Three independent results can partly balance one another. Reusing the same random result three times magnifies every deviation threefold; the three terms are not independent.

</section>

<section class="lesson-check" markdown="1">

### Try it {#check-combinations}

**Question:** Four independent measurements $X_1,X_2,X_3,X_4$ each have mean 10 and variance 4. Define $D=X_1+X_2-X_3-X_4$ and $M=(X_1+X_2+X_3+X_4)/4$. Find their means and variances. Would your variance calculation for $D$ remain valid if $X_3=X_1$ and $X_4=X_2$?

<details markdown="1"><summary>Hint</summary>

Decide which terms are independent before applying the variance rule.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$E(D)=0$, $\operatorname{Var}(D)=4+4+4+4=16$. $E(M)=10$, $\operatorname{Var}(M)=16/16=1$. Under the changed condition $D=0$ for every outcome, so its variance is 0; the independence calculation no longer applies. If you subtracted variances or confused copies with repeats, revisit [combinations](#combinations), then [retry](#retry-combinations).

</details>

</section>

## Repair the difficulty, then try a new task {#retry}

Close the previous solutions. Choose the new task that matches your difficulty and record whether you needed help.

<section class="lesson-check" markdown="1">

### Try it {#retry-area}

**Question:** A variable is uniform on $[2,2.2]$. Find its density height and the probability that it lies between 2.05 and 2.15. Explain why a density height cannot be read as a probability.

<details markdown="1"><summary>Hint</summary>

Draw a rectangle with total area 1.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

The height is 5 and the interval probability is $5(0.1)=0.5$. Height needs a width to produce area; it is not itself a probability. Revisit [density](#density) if this remains unclear.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-cdf}

**Question:** The density is $1/3$ on $[0,1]$, $2/3$ on $(1,2]$, and zero elsewhere. Write the full CDF and find $q$ such that $P(X>q)=1/3$.

<details markdown="1"><summary>Hint</summary>

Carry the first area into the second branch.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

Carry forward the first area before adding the second:

$$\frac13+\frac{2(x-1)}3=\frac{2x-1}3.$$

$$F(x)=\begin{cases}
0,&x<0,\\
x/3,&0\le x\le1,\\
(2x-1)/3,&1<x\le2,\\
1,&x>2.
\end{cases}$$

$F(q)=2/3$, so the second branch gives $q=1.5$. The joins give 0, $1/3$, 1. If you restarted at zero, revisit [CDF](#cdf).

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-moments}

**Question:** A variable has density $2(1-x)$ on $[0,1]$, zero elsewhere. Find its mean and variance. Find the standard deviation of $Z=3-2X$.

<details markdown="1"><summary>Hint</summary>

Use the weighted integrals, not the midpoint of the interval.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$$\begin{aligned}
E(X)&=[x^2-2x^3/3]_0^1=\frac13,\\
E(X^2)&=[2x^3/3-x^4/2]_0^1=\frac16,\\
\operatorname{Var}(X)&=\frac16-\frac19=\frac1{18},\\
\operatorname{SD}(Z)&=2\sqrt{1/18}=\frac{\sqrt2}{3}.
\end{aligned}$$

The larger density near zero pulls the mean left. Revisit [moments](#moments) or [linear changes](#linear) for the step you missed.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-functions}

**Question:** A variable $X$ has density $2/x^2$ on $[1,2]$, zero elsewhere. Check it is a density. For $Y=1/X$, find its mean, variance and standard deviation.

<details markdown="1"><summary>Hint</summary>

Multiply the density by the output, then by its square in a separate integral.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

$$\begin{aligned}
\int_1^2 2x^{-2}\,dx&=[-2/x]_1^2=1,\\
E(Y)&=\int_1^2 2x^{-3}\,dx\\
 &=[-x^{-2}]_1^2=\frac34,\\
E(Y^2)&=\int_1^2 2x^{-4}\,dx\\
 &=[-2/(3x^3)]_1^2=\frac7{12},\\
\operatorname{Var}(Y)&=\frac7{12}-\frac9{16}=\frac1{48},\\
\operatorname{SD}(Y)&=\sqrt{1/48}.
\end{aligned}$$

The density is non-negative and $x$ stays away from zero. Revisit [functions](#functions) if you substituted the mean into $1/x$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-combinations}

**Question:** Independent $A,B,C$ have means 1, 2, 3 and variances 2, 3, 4. Find the mean, variance and standard deviation of $A-2B+3C$. Is its distribution necessarily normal?

<details markdown="1"><summary>Hint</summary>

Keep signs in means, square coefficients in variances, and separate moments from distribution shape.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

The mean is $1-4+9=6$, variance is $2+4(3)+9(4)=50$, and standard deviation is $\sqrt{50}$. No normal shape follows from these moments alone. Revisit [combinations](#combinations) if independence or signs were missed.

</details>

</section>

## Return after studying another topic {#later-review}

Without the worked examples, choose the steps yourself. Explain your limits, branches and independence conditions.

<section class="lesson-check" markdown="1">

### Try it {#review-task}

**Question:** A sensor has density $2x$ on $[0,1]$, zero elsewhere. A recorded output is $Y=X^2$. Find $P(Y>0.64)$, $E(Y)$ and $\operatorname{Var}(Y)$. Four independent sensors give outputs with this same model. Find the mean and variance of their total.

<details markdown="1"><summary>Hint</summary>

Translate the output event back into the allowed input range; then distinguish moments of one output from a total of independent outputs.

</details>

<details markdown="1"><summary>Answer and feedback</summary>

Since $X\ge0$, $Y>0.64$ means $X>0.8$.

$$\begin{aligned}
P(Y>0.64)&=\int_{0.8}^1 2x\,dx=0.36,\\
E(Y)&=\int_0^1 2x^3\,dx=\frac12,\\
E(Y^2)&=\int_0^1 2x^5\,dx=\frac13,\\
\operatorname{Var}(Y)&=\frac13-\frac14=\frac1{12}.
\end{aligned}$$

The total has mean 2 and variance $1/3$. For event errors revisit [quantiles](#quantiles), for moment errors [functions](#functions), and for total errors [combinations](#combinations); then attempt the corresponding new retry without help.

</details>

</section>

## Next: a waiting-time model {#next-step}

Continue to [exponential distribution](/alevel/a2-mathematics/statistics/exponential-distribution/), where waiting times connect these area ideas to Poisson events.

<details markdown="1"><summary>Sources and scope</summary>

OxfordAQA 9660 v5.2, S2.2, printed pp.25–26 / PDF pp.24–25: [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). The piecewise-density example is adapted from January 2025 Q2: [question paper, PDF pp.6–8](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=6), [paired final mark scheme, PDF pp.6–8](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=6). The density and normalising constant are retained; the CDF request is new. It is not a verbatim official question. Other tasks are author-created. No calculator button sequence or student learning outcome is claimed as verified.

</details>

{% include exam_topic_practice.html %}
