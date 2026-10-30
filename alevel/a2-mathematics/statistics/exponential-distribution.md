---
title: "Exponential distribution: how long until the next event?"
layout: subjects
mathjax: true
grade: a2
subject: s2
permalink: /alevel/a2-mathematics/statistics/exponential-distribution/
reading_layout: true
study_page: true
toc_headings: "#waiting-model, #zero-bridge, #cdf-density, #moments, #quantiles, #practice, #retry, #later-review, #next-step"
---

[A2 Statistics](/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

A call centre averages six calls an hour. That is a statement about **counts**. A caller may instead ask: how long until the next call? A mean gap of ten minutes does not mean calls arrive every ten minutes.

Start with [continuous random variables](/alevel/a2-mathematics/statistics/continuous-random-variables/) for density, area and cumulative probability. You also need [Poisson counts](/alevel/a2-mathematics/statistics/poisson-distribution/), exponential integration and logarithms. We connect these ideas below. Apart from the labelled OxfordAQA original question, all situations and tasks are self-written, with no official marks.

## Choose a waiting-time model {#waiting-model}

Let $T$ be the time from now until the next event. Unlike a count, a waiting time can be 2.3 minutes or 2.31 minutes. It is continuous and non-negative. Use an **exponential distribution** when intervals are between events of a constant-rate Poisson process: events occur independently and singly, with no systematic change in rate over the period modelled.

A fixed timetable does not fit: a train every ten minutes has very different waiting times. A daily average also cannot justify a single exponential model if every lunchtime has a predictable surge. Check the event process, not just the mean.

Write $T\sim\operatorname{Exp}(r)$, with $r>0$. Here $r$ is the **rate of events per unit time**, not the mean waiting time. Some references use lambda for the exponential rate. In these lessons we reserve $\lambda=rt$ for a Poisson count's interval mean, and use $r$ for the rate. Always read the definition of a parameter before using it.

## Waiting longer means no event yet {#zero-bridge}

For $t\ge0$, let $N(t)$ count events during the next $t$ time units. Under the process assumptions,

$$N(t)\sim\operatorname{Po}(rt).$$

$$\begin{aligned}
P(T>t)&=P(N(t)=0)\\
&=\frac{e^{-rt}(rt)^0}{0!}\\
&=e^{-rt}.
\end{aligned}$$

“Wait more than $t$” and “zero events in the next $t$” describe the same outcome. This is the **survival probability**, the area to the right of $t$. The time units in $r$ and $t$ cancel, so the exponent $rt$ has no time unit left. If the rate is per hour, express the time in hours. This bridge uses a Poisson process; knowing that one isolated count is Poisson does not by itself establish the whole waiting-time model.

<div class="worked-example" markdown="1">

### Example: a longer gap {#example-wait}

**Question:** Calls follow a Poisson process at a rate of 6 per hour. Find the probability that the wait for the next call exceeds 15 minutes.

The variable is waiting time, not count. Define $T$ in hours; 15 minutes is $0.25$ hour. The event is a right tail, or equivalently zero calls in this interval:

$$\begin{aligned}
P(T>0.25)&=e^{-6(0.25)}\\
&=e^{-1.5}\approx0.223.
\end{aligned}$$

The same interval count has mean $6(0.25)=1.5$, so its zero probability agrees. A longer threshold would make this survival probability smaller.

</div>

## From a cumulative probability to a density {#cdf-density}

The cumulative distribution function (CDF) is $F(t)=P(T\le t)$: all the probability accumulated up to $t$. For non-negative $t$, subtract the right tail from 1. A negative waiting time is impossible:

$$F(t)=\begin{cases}
0,&t<0,\\
1-e^{-rt},&t\ge0.
\end{cases}$$

$$f(t)=\begin{cases}
re^{-rt},&t\ge0,\\
0,&t<0.
\end{cases}$$

For $t>0$, differentiate $1-e^{-rt}$ to obtain $re^{-rt}$. The density $f(t)$ is a **height**, not the probability at exactly $t$. It starts at $r$ and decreases towards zero; the long right tail allows occasional very long waits. The area under it is probability, so its height may exceed 1 when time units make $r>1$. Its units are inverse time. Changing the assigned density value at a single point, such as zero, does not change any probability.

Here is why its total area is 1. Since $r>0$, the exponential tends to zero as $b\to\infty$:

$$\begin{aligned}
\int_0^b re^{-rt}\,dt
&=\left[-e^{-rt}\right]_0^b\\
&=1-e^{-rb}\\
&\longrightarrow1.
\end{aligned}$$

The antiderivative is $-e^{-rt}$ because its derivative is $re^{-rt}$. More generally, for $0\le a<b$,

$$\begin{aligned}
P(a<T<b)&=\int_a^b re^{-rt}\,dt\\
&=\left[-e^{-rt}\right]_a^b\\
&=e^{-ra}-e^{-rb}\\
&=F(b)-F(a).
\end{aligned}$$

$$P(T=a)=0.$$

An exact point has zero width and hence zero area. Including either endpoint makes no difference for this continuous model. There is no integer boundary adjustment as in a Poisson count. If an interval extends below zero, only its non-negative part contributes area.

<div class="worked-example" markdown="1">

### Example: a window of time {#example-area}

**Question:** A waiting time T in minutes has exponential rate 0.2 per minute. Find P(2 < T < 5) using the density, and check with the CDF.

The event is a bounded interval, so use the area from 2 to 5, not the height at 5 or a single right tail. The support includes this whole interval:

$$\begin{aligned}
P(2<T<5)&=\int_2^5 0.2e^{-0.2t}\,dt\\
&=\left[-e^{-0.2t}\right]_2^5\\
&=-e^{-1}-(-e^{-0.4})\\
&=e^{-0.4}-e^{-1}\\
&\approx0.302.
\end{aligned}$$

$$\begin{aligned}
F(5)-F(2)&=(1-e^{-1})\\
&\quad-(1-e^{-0.4})\\
&=e^{-0.4}-e^{-1}.
\end{aligned}$$

The two methods agree. Reversing the limits would give a negative number, which cannot be a probability.

</div>

## What the average wait means {#moments}

For an exponential waiting time of rate $r$, you may use these results without proof:

$$\begin{aligned}
E(T)&=\frac1r,\\
\operatorname{Var}(T)&=\frac1{r^2},\\
\operatorname{SD}(T)&=\frac1r.
\end{aligned}$$

If the process averages six arrivals per hour, the average wait is one sixth of an hour, not six hours. Increasing the rate shortens the wait. Mean and standard deviation have time units; variance has squared time units. They do not measure the event count. Equality of mean and standard deviation is a property of this distribution, not a rule for every continuous variable. A mean is a long-run average; it need not be the median, and it does not fix an individual wait.

<div class="worked-example" markdown="1">

### Example: recover a rate {#example-moments}

**Question:** A waiting time T is exponential with mean 8 minutes. Find its rate per minute, variance and standard deviation. Find the probability of waiting longer than its mean.

Use the reciprocal relationship to recover the rate first. Keep minutes throughout:

$$\begin{aligned}
\frac1r&=8,\qquad r=\frac18,\\
\operatorname{Var}(T)&=8^2=64,\\
\operatorname{SD}(T)&=8.
\end{aligned}$$

$$\begin{aligned}
P(T>8)&=e^{-(1/8)8}\\
&=e^{-1}\approx0.368.
\end{aligned}$$

The rate is 0.125 per minute, variance 64 minutes squared and SD 8 minutes. The chance of exceeding the mean is not one half: the density is not symmetric.

</div>

## Work backwards from a probability {#quantiles}

Sometimes the unknown is a time threshold. First decide which area was given. For a cumulative probability $0<q<1$, the quantile $t_q$ satisfies:

$$\begin{aligned}
1-e^{-rt_q}&=q,\\
e^{-rt_q}&=1-q,\\
-rt_q&=\ln(1-q),\\
t_q&=-\frac{\ln(1-q)}r.
\end{aligned}$$

Because $0<1-q<1$, its logarithm is negative, giving a positive time. The logarithm is taken only after isolating the positive exponential term. If a right-tail probability $s$ is given, use $e^{-rt}=s$ directly instead. Neither $q=1$ nor a zero survival probability gives a finite waiting threshold.

<div class="worked-example" markdown="1">

### Example: a service threshold {#example-quantile}

**Question:** Events follow a Poisson process of rate 0.5 per minute. Find a time t such that the next event occurs within t minutes with probability 0.9.

“Within” means cumulative probability, not survival probability. With $r=0.5$:

$$\begin{aligned}
1-e^{-0.5t}&=0.9,\\
e^{-0.5t}&=0.1,\\
-0.5t&=\ln0.1,\\
t&=-2\ln0.1\\
&\approx4.61.
\end{aligned}$$

The threshold is about 4.61 minutes. Substitution gives a survival probability of 0.1, hence a cumulative probability of 0.9.

</div>

## Put the ideas to work {#practice}

Try each task before opening either panel. Record whether you used a hint; then close the solution before attempting its linked retry.

<section class="lesson-check" markdown="1">

### Try it {#task-bridge}

**Question:** Arrivals occur independently and singly at a constant mean rate of 6 per hour. Let T be the wait in minutes for the next arrival. Find P(T > 20), state the distribution and parameter of T, and explain the connection with a count. Would the same waiting-time model fit arrivals scheduled exactly 10 minutes apart?

<details markdown="1"><summary>Hint</summary>

Define the units of the rate to match the units of T.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

The assumptions describe a constant-rate Poisson process. In minutes its rate is $6/60=0.1$, so $T\sim\operatorname{Exp}(0.1)$.

$$\begin{aligned}
P(T>20)&=e^{-0.1(20)}\\
&=e^{-2}\approx0.135.
\end{aligned}$$

This is also the probability of zero arrivals in 20 minutes, where the count has mean 2. Scheduled arrivals are not independent random arrivals and do not fit this exponential model. Rate errors: [units and zero bridge](#zero-bridge); model errors: [conditions](#waiting-model). Then [retry](#retry-bridge).

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#task-area}

**Question:** A non-negative lifetime T in hours has density f(t) = 0.5 exp(-0.5t) for t >= 0, and zero otherwise. Find its CDF for all real t, P(1 < T < 3) and P(T = 2). Explain why substituting t = 2 in the density does not give the last probability.

<details markdown="1"><summary>Hint</summary>

Use area for probabilities; include the part of the CDF below zero.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

Below zero the cumulative probability is zero. For $t\ge0$,

$$\begin{aligned}
F(t)&=\int_0^t0.5e^{-0.5u}\,du\\
&=\left[-e^{-0.5u}\right]_0^t\\
&=1-e^{-0.5t}.
\end{aligned}$$

$$\begin{aligned}
P(1<T<3)&=\int_1^3 0.5e^{-0.5t}\,dt\\
&=\left[-e^{-0.5t}\right]_1^3\\
&=e^{-0.5}-e^{-1.5}\\
&\approx0.383.
\end{aligned}$$

$P(T=2)=0$. The density at 2 is a height, while a point has zero area. An omitted support or incorrect area needs [CDF and density](#cdf-density), followed by [retry](#retry-area).

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#task-moments}

**Question:** An exponential waiting time T has standard deviation 4 minutes. Find its mean, variance and event rate per minute. Find P(T < 4). Explain why the mean is not the median.

<details markdown="1"><summary>Hint</summary>

Relate standard deviation to the rate before finding any probability.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

Mean and SD are both $1/r$, so the mean is 4 minutes, variance is 16 minutes squared and rate is $1/4$ per minute.

$$\begin{aligned}
P(T<4)&=1-e^{-(1/4)4}\\
&=1-e^{-1}\approx0.632.
\end{aligned}$$

The probability below the mean is not 0.5, so 4 is not the median. Confusing rate with waiting time or variance with SD needs [moments](#moments), then [retry](#retry-moments).

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#task-quantile}

**Question:** Events occur as a Poisson process of rate 0.25 per minute. Find a time b such that the probability of waiting longer than b minutes for the next event is 0.2. Give b to three significant figures and check which side of b has probability 0.8.

<details markdown="1"><summary>Hint</summary>

Decide whether 0.2 describes the left or right side.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

The given probability is the right tail:

$$\begin{aligned}
e^{-0.25b}&=0.2,\\
-0.25b&=\ln0.2,\\
b&=-4\ln0.2\\
&\approx6.44.
\end{aligned}$$

The answer is 6.44 minutes. Probability 0.8 is to its left: $P(T\le b)=0.8$. Using $1-e^{-0.25b}=0.2$ reverses the event. Return to [inverse probabilities](#quantiles), then [retry](#retry-quantile).

</details>

</section>

<section class="lesson-check" markdown="1">

### OxfordAQA original question {#official-task}

OxfordAQA 9660/MA04, January 2025, Q4(c), with the shared model from Q4(b). The English context and this part's wording are retained.

**Question:** The number of advertisements which appear on an app in a 30-minute period is modelled as a Poisson distribution with a mean of 10

An advertisement appears at 10.15 am on the app.
Use an exponential distribution to find the probability that no more advertisements appear until after 10.20 am.

Give your answer to three significant figures.

<details markdown="1"><summary>Hint</summary>

Measure the gap between the two clock times, then convert the count mean into a rate per minute.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

Using the Poisson-process interpretation implicit in the question, define $T$ as the wait in minutes from 10.15 am to the next advertisement. The rate is $r=10/30=1/3$ per minute, and the gap is five minutes:

$$\begin{aligned}
P(T>5)&=e^{-(1/3)5}\\
&=e^{-5/3}\\
&=0.188875\ldots\approx0.189.
\end{aligned}$$

The final mark scheme (page 11) identifies the rate, the exponential tail and the answer 0.189. The Poisson zero-count check uses interval mean $5/3$ and gives the same result. Using 10 as a per-minute rate confuses an interval mean with a rate; using $1-e^{-5/3}$ gives the opposite event. Return to [the zero-event bridge](#zero-bridge), then [retry](#retry-bridge).

</details>

</section>

## Repair one difficulty, then retry {#retry}

Close the earlier answer. Choose the task corresponding to your error; explain the choice of event as well as the calculation.

<section class="lesson-check" markdown="1">

### Try it {#retry-bridge}

**Question:** Defects occur along a cable according to a Poisson process at a rate of 0.4 per metre. Starting at a fixed point, let L be the distance in metres to the next defect. Find P(L > 3) and the expected number of defects in the next 3 metres. Explain why these two answers describe different quantities. A different cable has defects concentrated in tightly clustered groups separated by long undamaged sections, but the same overall average number per metre. Is the same constant-rate exponential model for gaps justified by this information? Explain.

<details markdown="1"><summary>Hint</summary>

An interval can be a length rather than a time.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

$L\sim\operatorname{Exp}(0.4)$, and no defect in the next three metres is equivalent to $L>3$.

$$\begin{aligned}
P(L>3)&=e^{-0.4(3)}\\
&=e^{-1.2}\approx0.301,\\
E(N(3))&=0.4(3)=1.2.
\end{aligned}$$

0.301 is a probability; 1.2 is an expected count and can exceed 1. The exponential rate is 0.4 per metre, not the interval mean 1.2. Revisit [the bridge](#zero-bridge) if necessary.

The same overall average does not establish the same model. Clustering casts doubt on independence, a constant rate and single occurrences; the average alone cannot justify one exponential gap model. Investigate the process before choosing a segmented or different model. If you still relied only on an average, revisit [conditions](#waiting-model), then use [the new Poisson-conditions task](/alevel/a2-mathematics/statistics/poisson-distribution/#retry-model) to judge another process.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-area}

**Question:** A non-negative waiting time T has density 3 exp(-3t) in minutes, and zero density below zero. Find P(-1 < T < 1/3) and P(T >= 1/3). A student says the density is invalid because f(0) = 3. Explain the mistake.

<details markdown="1"><summary>Hint</summary>

Only the part of the interval in the support contributes area.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

The first interval starts below the support, so start the integral at zero:

$$\begin{aligned}
P(-1<T<1/3)&=P(0<T<1/3)\\
&=\int_0^{1/3}3e^{-3t}\,dt\\
&=\left[-e^{-3t}\right]_0^{1/3}\\
&=1-e^{-1}\approx0.632,\\
P(T\ge1/3)&=e^{-1}\approx0.368.
\end{aligned}$$

They sum to 1 because the boundary point has probability zero. A density height may exceed 1; its total area, not each height, must be 1. Return to [density and support](#cdf-density) if necessary.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-moments}

**Question:** The mean exponential waiting time is 30 seconds. Give the event rate per minute, mean in minutes, variance in minutes squared and standard deviation in seconds. Find the probability of waiting more than 1 minute.

<details markdown="1"><summary>Hint</summary>

Convert the mean to minutes before taking its reciprocal.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

The mean is 0.5 minute, so $r=2$ per minute. Variance is $0.5^2=0.25$ minutes squared; SD is 0.5 minute, or 30 seconds.

$$P(T>1)=e^{-2}\approx0.135.$$

The variance is not 0.5 and the rate is not 30 per minute. Revisit [units and moments](#moments) for either error.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#retry-quantile}

**Question:** An exponential waiting time has mean 5 minutes. Find its median in minutes. Explain whether the median is larger or smaller than the mean, using your result rather than assuming symmetry.

<details markdown="1"><summary>Hint</summary>

A median splits the cumulative probability at one half.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

The rate is $r=1/5$ per minute. If $m$ is the median,

$$\begin{aligned}
1-e^{-m/5}&=0.5,\\
e^{-m/5}&=0.5,\\
m&=-5\ln0.5\\
&=5\ln2\approx3.47.
\end{aligned}$$

The median is 3.47 minutes, below the mean of 5 minutes. The long right tail pulls the mean further right. See [inverse probability](#quantiles) if the wrong tail or a negative time appeared.

</details>

</section>

## Come back after another topic {#later-review}

Close all examples and work from the situation. Treat this as a fresh attempt; note any help you use.

<section class="lesson-check" markdown="1">

### Try it {#later-task}

**Question:** Messages arrive independently and singly at a constant rate of 12 per hour. Find (a) the probability of exactly 1 message in the next 5 minutes, (b) the probability that the wait for the next message is between 5 and 10 minutes, and (c) a time exceeded by only 10% of waits. State your variables and give time answers in minutes.

<details markdown="1"><summary>Hint</summary>

The first part counts events; the others describe waiting time.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

Let $N$ count messages in five minutes and $T$ be the next waiting time in minutes. The process assumptions justify $N\sim\operatorname{Po}(1)$ and $T\sim\operatorname{Exp}(0.2)$.

$$P(N=1)=e^{-1}\approx0.368.$$

$$\begin{aligned}
P(5<T<10)&=F(10)-F(5)\\
&=e^{-1}-e^{-2}\\
&\approx0.233.
\end{aligned}$$

$$\begin{aligned}
P(T>c)&=0.1,\\
e^{-0.2c}&=0.1,\\
c&=-5\ln0.1\approx11.5.
\end{aligned}$$

The last threshold is about 11.5 minutes. If count and wait were mixed, return to [the bridge](#zero-bridge) and [retry](#retry-bridge). For an interval error use [area](#cdf-density) and [retry](#retry-area); for a threshold error use [quantiles](#quantiles) and [retry](#retry-quantile).

</details>

</section>

## What comes next? {#next-step}

You can now connect a zero Poisson count to a waiting time, check the process assumptions, use the CDF or density area, recover a rate from the moments and find a time from a probability. Continue to [the normal distribution](/alevel/a2-mathematics/statistics/normal-distribution/), where a symmetric density replaces this decreasing right-tailed density, or return to the [Statistics course](/alevel/a2-mathematics/statistics/).

<details markdown="1"><summary>Sources and scope</summary>

OxfordAQA Mathematics 9660 v5.2 S2.3, printed page 26 (PDF page 25), checked from the [current qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/) and [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Conditions, probabilities by CDF or density integration, and mean, variance and SD are the core scope. Proofs of the moment results are not expected. The inverse-probability tasks apply the same CDF and logarithms; memorylessness is not added as a compulsory objective.

Original Q4(c), with the shared context: [MA04 January 2025 question paper, pages 12–13](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=12), actually read with [final mark scheme, pages 10–11](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=10). The rate and tail were independently recalculated. All other tasks and examples are self-written and have no official marks. Calculations do not claim verified calculator key sequences or evidence of student mastery.

</details>

{% include exam_topic_practice.html %}
