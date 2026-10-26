---
title: "Poisson distribution: counting events"
layout: subjects
mathjax: true
grade: a2
subject: s2
permalink: /alevel/a2-mathematics/statistics/poisson-distribution/
reading_layout: true
study_page: true
toc_headings: "#model, #interval, #probability, #spread, #independent-sums, #binomial-limit, #practice, #retry, #later-review, #next-step"
---

[A2 Statistics](/alevel/a2-mathematics/statistics/)
{:.lesson-meta}

A help desk receives an average of three messages a minute. Some minutes are quiet; others are busy. An average of three does **not** promise exactly three every minute.

Here we ask how likely different counts are. First choose what to count and for how long; then calculate. Try the questions on paper before opening the hints or solutions.

You need proportions, [probability complements](/alevel/as-mathematics/probability/#l18-concept) and [discrete random variables](/alevel/as-mathematics/random-variables/#l19-concept). We explain the new formula below. All situations and tasks are self-written except the labelled OxfordAQA question.

## What are we counting? {#model}

Let $X$ be the number of messages received in one minute. Before that minute ends, we do not know its value. It could be $0,1,2,3,\ldots$, but not $2.5$. That is why $X$ is a **discrete random variable**: it takes separate whole-number values.

A **Poisson distribution** is one possible model for such counts in a fixed time or space interval. It gives a probability for each possible count. Counting something does not automatically make the Poisson model suitable.

For events over time, we assume:

- The average rate stays constant over the period studied. This allows uneven gaps, but not a systematic lunchtime surge in the same constant-rate model.
- Events happen independently: one arrival does not cause the next arrival. Counts in disjoint time intervals are independent.
- Events occur singly. In a very short interval, two or more arrivals are much less likely than one arrival; arrivals in batches would need a different model.

These are assumptions to check against the situation, not facts proved by knowing an average. Messages from different people arriving separately might fit. A system releasing ten messages together every minute would not.

We write

$$X\sim\operatorname{Po}(\lambda).$$

Read this as “$X$ has a Poisson distribution with mean $\lambda$”. The symbol $\lambda$ (lambda) is the average count **in the interval we chose**. It can be $2.5$ even though the actual count cannot: an average need not be a possible single result.

## Change the time, change the mean {#interval}

Suppose the constant average rate is $r=3$ messages per minute. In two minutes the average count is $3\times2=6$; in half a minute it is $3\times0.5=1.5$.

| Interval | Mean count in that interval |
| --- | --- |
| 30 seconds | $\lambda=3\times0.5=1.5$ |
| 1 minute | $\lambda=3$ |
| 2 minutes | $\lambda=3\times2=6$ |

The connection is $\lambda=rt$. Use matching units: a rate $r$ per minute needs time $t$ in minutes. The rate $r$ stays the same here; $\lambda$ changes because we count for a different length of time.

Before calculating, write one sentence defining the count and interval. “$X$ is the number of messages in two minutes” prevents us from accidentally using the one-minute mean.

## From a count to a probability {#probability}

For $X\sim\operatorname{Po}(\lambda)$ with $\lambda>0$, the probability of **exactly** $k$ events is

$$P(X=k)=\frac{e^{-\lambda}\lambda^k}{k!},\qquad k=0,1,2,\ldots.$$

Here $e\approx2.71828$ is the constant used in exponential functions; it is not another unknown. The factorial $k!$ means $k\times(k-1)\times\cdots\times1$, with $0!=1$. For example, $3!=6$ and $5!=120$.

The model supplies this formula; a formal derivation is not required here. It gives the chance of **one count**, not the chance of every count up to it. Keep the full calculator value until rounding the final answer. A probability must lie between $0$ and $1$.

<div class="worked-example" markdown="1">

### Example: a two-minute count {#example-exact}

**Question:** Messages arrive according to a Poisson process at a constant mean rate of 3 per minute. Find the probability of exactly 5 messages in 2 minutes. Give your answer to three significant figures.

Let $X$ count messages in two minutes. The mean belongs to **two** minutes, so $\lambda=3\times2=6$ and $X\sim\operatorname{Po}(6)$. “Exactly 5” means $X=5$:

$$\begin{aligned}
P(X=5)&=\frac{e^{-6}6^5}{5!}\\
&=\frac{e^{-6}\times7776}{120}\\
&=0.160623\ldots\approx0.161.
\end{aligned}$$

This is about a 16.1% chance. We used 6 as the mean and 5 as the requested count; they have different jobs. The result is between 0 and 1, as required.

</div>

### “At least” includes several counts {#integer-boundaries}

If a question asks for at least two, the allowed counts are $2,3,4,\ldots$. It is easier to remove the counts we do not want, $0$ and $1$, from total probability 1. This is the **complement** rule.

| Words | Integer event |
| --- | --- |
| Exactly 2 | $X=2$ |
| At least 2 | $X\ge2$: $2,3,4,\ldots$ |
| More than 2 | $X>2$: $3,4,5,\ldots$ |
| Fewer than 2 | $X<2$: $0,1$ |
| At most 2 | $X\le2$: $0,1,2$ |

<div class="worked-example" markdown="1">

### Example: at least two {#example-tail}

**Question:** For the same message model, find the probability of at least 2 messages in 1 minute. Give your answer to three significant figures.

This interval is one minute, so now let $Y\sim\operatorname{Po}(3)$. We want $2,3,4,\ldots$, not just 2:

$$\begin{aligned}
P(Y\ge2)&=1-P(Y=0)-P(Y=1)\\
&=1-\frac{e^{-3}3^0}{0!}-\frac{e^{-3}3^1}{1!}\\
&=1-e^{-3}-3e^{-3}\\
&=0.800851\ldots\approx0.801.
\end{aligned}$$

The two excluded probabilities total about 0.199, leaving about 0.801. This calculation includes every allowed count without adding infinitely many terms.

</div>

## What does the average tell us? {#spread}

For a Poisson count, the mean and variance are both $\lambda$; the standard deviation is $\sqrt\lambda$:

$$E(X)=\lambda,\qquad\operatorname{Var}(X)=\lambda,\qquad\operatorname{SD}(X)=\sqrt\lambda.$$

The **mean** describes the long-run average over repeated equal intervals. The **standard deviation** describes how spread out the counts are around that mean. The variance is its square; it is not the standard deviation.

For the two-minute message count, the mean is 6, the variance is 6 and the standard deviation is $\sqrt6\approx2.45$. This does not say that every count lies within 2.45 of 6, nor that exactly 6 must occur. If expected value or variance is unfamiliar, revisit the [weighted-average example](/alevel/as-mathematics/random-variables/#l19-worked).

## Combining counts {#independent-sums}

Two help desks count calls separately. If the counts are independent and each has a Poisson distribution, the **total** also has a Poisson distribution. Add their means, not their standard deviations:

$$\begin{aligned}
X&\sim\operatorname{Po}(a),\\
Y&\sim\operatorname{Po}(b),\\
X+Y&\sim\operatorname{Po}(a+b).
\end{aligned}$$

Here $a,b>0$ and independence is essential. The result extends to any finite sum of independent Poisson counts. It is a result you may use without proof. Both variables must describe the intended total: convert rates to means over the actual observation periods first. Counts from overlapping periods usually share events and are not independent. A difference of counts can be negative, so this sum rule does not make it Poisson.

<div class="worked-example" markdown="1">

### Example: two sources {#example-sum}

**Question:** Two independent Poisson call streams have rates 2 and 4 per hour. Find the distribution of their total number of calls in 30 minutes, its standard deviation and the probability of no calls.

Let $X,Y$ be the respective half-hour counts and $S=X+Y$. Each mean is rate times half an hour. Independence lets us apply the sum rule:

$$\begin{aligned}
X&\sim\operatorname{Po}(1),\\
Y&\sim\operatorname{Po}(2),\\
S&\sim\operatorname{Po}(3).
\end{aligned}$$

$$\begin{aligned}
\operatorname{SD}(S)&=\sqrt3\approx1.73,\\
P(S=0)&=e^{-3}\approx0.0498.
\end{aligned}$$

As a check, no calls in total means no calls at either source. Independence gives $e^{-1}e^{-2}=e^{-3}$. If one call always triggers another at the other desk, that multiplication and the sum rule cannot be assumed.

</div>

## Many trials, small individual chances {#binomial-limit}

A binomial model counts successes in a fixed number of independent trials with the same success probability. If $n$ is large and $p$ is small, a Poisson distribution with mean $np$ can approximate this count:

$$X\sim\operatorname{B}(n,p),\qquad \lambda=np.$$

$$P(X=k)\approx\frac{e^{-np}(np)^k}{k!}.$$

Imagine keeping the average number of successes fixed while dividing the opportunities into more and more trials, each less likely to succeed. This is the binomial limiting picture: $n\to\infty$, $p\to0$, with $np=\lambda$ fixed. A formal derivation of the probability formula is not required. For finite $n$, this is an approximation; write $\approx$ for probabilities of the original binomial variable. There is no universal cut-off that guarantees any requested accuracy. A small $np$ alone is not enough: $\operatorname{B}(4,0.5)$ has mean 2 but $p$ is not small. Check the binomial assumptions before checking the approximation conditions.

<div class="worked-example" markdown="1">

### Example: rare faulty parts {#example-approx}

**Question:** Each of 500 parts is independently faulty with probability 0.004. Estimate the probability of at least 2 faulty parts using a suitable approximation. Explain your choice.

The exact model for the faulty count $D$ is binomial. There are many trials, and each fault probability is small, so approximate using $V\sim\operatorname{Po}(2)$ because $500\times0.004=2$. At least two is the complement of zero or one:

$$\begin{aligned}
P(D\ge2)&\approx P(V\ge2)\\
&=1-P(V=0)-P(V=1)\\
&=1-e^{-2}(1+2)\\
&\approx0.594.
\end{aligned}$$

The exact binomial calculation gives about 0.59454; the Poisson value is about 0.59399. Agreement checks this example, not every possible approximation.

</div>

### Reading a cumulative Poisson table {#table-use}

A cumulative entry at $k$ usually gives $P(V\le k)$; check the table heading first. For this example, the entry at 1 is about 0.4060, so subtract it from 1. For a range 3 to 6 inclusive, subtract the entry at 2 from the entry at 6. If the required mean is not tabulated, use the probability formula and add the required terms; do not silently replace it by a nearby mean. An exponential key calculates $e^{-\lambda}$; retain extra digits until the end. No calculator key sequence is claimed as device-tested here.

### Why the mean and variance become equal {#moments-limit}

For the binomial variable, the mean is $np$ and the variance is $np(1-p)$. Keep $np=\lambda$ fixed while $p$ tends to zero:

$$\begin{aligned}
E(X)&=np=\lambda,\\
\operatorname{Var}(X)&=\lambda(1-p)\\
&\longrightarrow\lambda,\\
\operatorname{SD}(X)&=\sqrt{\lambda(1-p)}\\
&\longrightarrow\sqrt\lambda.
\end{aligned}$$

The factor $1-p$ tends to 1. This explains the limiting moment relationship; it does not prove the whole distributional limit. For a finite binomial model its variance is still $np(1-p)$, not exactly $np$.

## Try without the examples {#practice}

<section class="lesson-check" markdown="1">

### Task 1 {#task-model}

**Question:** A printer receives exactly one scheduled job every 10 minutes. A student models the number of jobs in a 10-minute interval by a Poisson distribution with mean 1. Explain why this model is unsuitable, even though the mean is correct.

<details markdown="1"><summary>Hint</summary>

Compare the possible counts in the real situation with the possible counts allowed by the proposed model.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

The count is fixed at 1, whereas a Poisson model with mean 1 assigns positive probabilities to 0, 2 and other counts as well. Arrivals follow a schedule, rather than independent random arrivals at a constant rate. Matching a mean is not enough. Return to [the model assumptions](#model), then attempt [the new modelling task](#retry-model).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task 2 {#task-interval}

**Question:** Calls arrive according to a Poisson process at a mean rate of 4 per hour. Let X be the number of calls in 30 minutes. State the distribution of X. Find (a) P(X = 0), (b) P(X > 2), giving probabilities to three significant figures.

<details markdown="1"><summary>Hint</summary>

Express 30 minutes in hours. For part (b), first list the counts that are excluded.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

Here $t=0.5$ hours, so $\lambda=4\times0.5=2$ and $X\sim\operatorname{Po}(2)$.

$$\begin{aligned}
P(X=0)&=e^{-2}\\
&=0.135335\ldots\approx0.135,\\
P(X>2)&=1-P(X=0)\\
&\quad-P(X=1)-P(X=2)\\
&=1-e^{-2}\left(1+2+\frac{2^2}{2!}\right)\\
&=1-5e^{-2}\\
&=0.323323\ldots\approx0.323.
\end{aligned}$$

Part (b) includes 3 upwards, so 2 must be excluded too. Repair a wrong mean at [intervals](#interval), or a wrong boundary at [integer events](#integer-boundaries); then do [a new count task](#retry-count).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task 3: OxfordAQA examination question {#official-task}

OxfordAQA 9660/MA04, January 2025, Q4(b)(i)(ii). Original English; 2 and 3 marks respectively. These are two parts of one question; the context applies to both.

The number of advertisements which appear on an app in a 30-minute period is modelled as a Poisson distribution with a mean of 10

**(i)** Find the probability of less than 5 advertisements appearing in a 30-minute period of using the app. Give your answer to three significant figures.

**(ii)** Find the probability of more than 7 and less than 13 advertisements appearing in a 15-minute period of using the app. Give your answer to three significant figures.

<details markdown="1"><summary>Hint</summary>

Write the possible whole-number counts for each part. Check whether both parts use the same time interval.

</details>

<details markdown="1"><summary>Solution and marking points</summary>

For (i), let $A$ count advertisements in 30 minutes. Then $A\sim\operatorname{Po}(10)$. “Less than 5” includes 0 through 4:

$$\begin{aligned}
P(A<5)&=P(A\le4)\\
&=\sum_{k=0}^{4}\frac{e^{-10}10^k}{k!}\\
&=0.0292526\ldots\approx0.0293.
\end{aligned}$$

The summation sign here means add the five formula values, for $k=0,1,2,3,4$. The official MS awards the method point for the correct integer event and the accuracy point for 0.0293.

For (ii), let $B$ count advertisements in 15 minutes. This is half the original interval, so $\lambda=5$ and $B\sim\operatorname{Po}(5)$. The allowed counts are 8 through 12:

$$\begin{aligned}
P(7<B<13)&=P(B\le12)\\
&\quad-P(B\le7)\\
&=\sum_{k=8}^{12}\frac{e^{-5}5^k}{k!}\\
&=0.131352\ldots\approx0.131.
\end{aligned}$$

Subtracting counts 0–7 from counts 0–12 leaves exactly 8–12. The official MS uses cumulative table values 0.9980−0.8666 and awards points for the new mean, the probability method and the answer. Summing the five unrounded formula values gives the same final 3-significant-figure answer. Repair at [intervals](#interval) or [integer events](#integer-boundaries), then use [the new count task](#retry-count).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task 4 {#task-spread}

**Question:** The number of faults in a fixed length of cable is modelled by X ~ Po(2.25). State the mean, variance and standard deviation. A student says, “The model is impossible because a cable cannot have 2.25 faults.” Explain the mistake.

<details markdown="1"><summary>Hint</summary>

Distinguish a single observed count from the average of many counts.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

The mean is $2.25$, the variance is $2.25$ and the standard deviation is $\sqrt{2.25}=1.5$. Each observed count is a whole number, but their long-run average need not be. Return to [mean and spread](#spread), then do [the new spread task](#retry-spread).

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#task-sum}

**Question:** Independent counts A and B have distributions Po(1.2) and Po(0.8). Find P(A + B > 0) and the standard deviation of A + B. A third count C records exactly the same events as A. Can A + C be treated by the same rule? Explain.

<details markdown="1"><summary>Hint</summary>

Distinguish adding independent counts from counting the same events twice.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

For $S=A+B$, independence gives $S\sim\operatorname{Po}(2)$.

$$\begin{aligned}
P(S>0)&=1-e^{-2}\approx0.865,\\
\operatorname{SD}(S)&=\sqrt2\approx1.41.
\end{aligned}$$

$C=A$, so $A+C=2A$ only takes even values. It is not Poisson with mean 2.4. In fact its variance is $4(1.2)=4.8$, not 2.4. Missing the independence condition? Return to [combining counts](#independent-sums), then [retry](#retry-sum).

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#task-approx}

**Question:** A batch contains 1000 independently produced items, each faulty with probability 0.002. Estimate the probability of at most 1 fault and justify your model. Another batch has 5 independent items, each faulty with probability 0.4. Would the same approximation be justified just because the two expected counts agree?

<details markdown="1"><summary>Hint</summary>

Write n, p and np for both batches before deciding.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

For the first batch, $n=1000$ is large, $p=0.002$ is small and $np=2$; approximate the fault count $D$ by $V\sim\operatorname{Po}(2)$.

$$\begin{aligned}
P(D\le1)&\approx P(V\le1)\\
&=e^{-2}(1+2)\\
&\approx0.406.
\end{aligned}$$

The second batch has the same mean but neither many trials nor a small success probability. Use its exact binomial model, not this Poisson approximation. A shared mean does not establish a shared distribution. If the choice or approximation sign was missed, revisit [conditions](#binomial-limit) and [table entries](#table-use), then [retry](#retry-approx).

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#task-limit}

**Question:** For each positive integer m, X_m has distribution B(200m, 0.01/m). Find its exact mean and variance. Describe the limits of its variance and standard deviation as m increases without bound. Is its variance exactly equal to its mean for finite m?

<details markdown="1"><summary>Hint</summary>

Keep the factor 1-p until taking the limit.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

The mean stays fixed while the individual probability tends to zero:

$$\begin{aligned}
E(X_m)&=2,\\
\operatorname{Var}(X_m)&=2(1-0.01/m)\\
&\longrightarrow2,\\
\operatorname{SD}(X_m)&\longrightarrow\sqrt2.
\end{aligned}$$

For finite $m$, the variance is strictly less than 2. Replacing it by 2 too soon confuses an exact binomial value with its limit. Return to [the moment limit](#moments-limit), then [retry](#retry-limit).

</details>

</section>

## Repair, then use new questions {#retry}

Close the previous solutions. Choose the task linked to your error; a correct answer copied from an open solution does not check whether the difficulty is resolved.

<section class="lesson-check" markdown="1">

### New task A {#retry-model}

**Question:** A help desk has a mean of 6 calls per hour over the whole school day. Every day, almost all calls arrive during the same 10-minute lunch break. Explain why using Po(6) for every one-hour period is unsuitable. Suggest one change to the modelling plan, and one further assumption that would still need checking.

<details markdown="1"><summary>Hint</summary>

An average over a day can hide a pattern within the day.

</details>

<details markdown="1"><summary>Solution</summary>

The rate changes with time, so a whole-day average cannot represent every hour. Separate lunch and quieter periods and estimate rates for periods where they are reasonably stable. Independence and absence of batch arrivals would still need checking; splitting the day alone does not establish a Poisson model. Revisit [model conditions](#model) if needed.

</details>

</section>

<section class="lesson-check" markdown="1">

### New task B {#retry-count}

**Question:** Faults along a cable follow a Poisson process with mean rate 0.5 per metre. Find the probability of at most 1 fault in a 6-metre section, to three significant figures. Define your random variable.

<details markdown="1"><summary>Hint</summary>

The interval is a length this time. List the counts included by “at most 1”.

</details>

<details markdown="1"><summary>Solution</summary>

Let $F$ be the number of faults in the 6-metre section. Then $\lambda=0.5\times6=3$, so $F\sim\operatorname{Po}(3)$.

$$\begin{aligned}
P(F\le1)&=P(F=0)+P(F=1)\\
&=e^{-3}+3e^{-3}\\
&=0.199148\ldots\approx0.199.
\end{aligned}$$

The time-to-length change does not change the counting method. If you used 0.5 as the mean, return to [rate and interval](#interval); if you omitted 0, return to [integer events](#integer-boundaries).

</details>

</section>

<section class="lesson-check" markdown="1">

### New task C {#retry-spread}

**Question:** A Poisson count has standard deviation 2. State its mean and variance. Explain whether the next observed count must equal the mean.

<details markdown="1"><summary>Hint</summary>

Square the standard deviation before using the Poisson relationship.

</details>

<details markdown="1"><summary>Solution</summary>

The variance is $2^2=4$, so the mean is also 4. The next count can be 0, 1, 2 or any non-negative integer; the mean does not fix a single observation. If you answered 2 for the mean, revisit [spread](#spread).

</details>

</section>

<section class="lesson-check" markdown="1">

### New attempt {#retry-sum}

**Question:** A Poisson process has rate 3 per hour. Let U count events in the first 20 minutes and V count events in the next 40 minutes. Find the distribution of U + V and P(U + V = 1). Would the same argument work if V counted the entire first hour?

<details markdown="1"><summary>Hint</summary>

Check whether the intervals overlap.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

The original intervals are disjoint, hence their counts are independent. Their means are 1 and 2.

$$\begin{aligned}
U+V&\sim\operatorname{Po}(3),\\
P(U+V=1)&=3e^{-3}\approx0.149.
\end{aligned}$$

If $V$ counts the first hour, it includes the events counted by $U$. The counts are dependent, so the independent-sum rule cannot be invoked. Return to [the condition](#independent-sums) if needed.

</details>

</section>

<section class="lesson-check" markdown="1">

### New attempt {#retry-approx}

**Question:** There are 400 independent trials, each with success probability 0.005. Estimate the probability of more than 1 success, explaining any approximation. A cumulative Poisson table has an entry 0.4060 for mean 2 at count 1. Explain how that entry is used.

<details markdown="1"><summary>Hint</summary>

Translate more than 1 into an integer event.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

Large $n$ and small $p$ support a Poisson approximation with $np=2$. If $D$ is the binomial count and $V\sim\operatorname{Po}(2)$,

$$\begin{aligned}
P(D>1)&\approx1-P(V\le1)\\
&\approx1-0.4060=0.5940.
\end{aligned}$$

The table entry includes both zero and one; it is not $P(V=1)$. See [table use](#table-use) or [approximation conditions](#binomial-limit) for the specific mistake.

</details>

</section>

<section class="lesson-check" markdown="1">

### New attempt {#retry-limit}

**Question:** A binomial variable has mean 3 and success probability p, where p tends to zero while the mean stays fixed. Express n, variance and standard deviation in terms of p, and state the limiting Poisson model. Explain what happens to n.

<details markdown="1"><summary>Hint</summary>

Use the fixed mean to express n first.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

Along valid binomial choices with integer $n$,

$$\begin{aligned}
n&=3/p\longrightarrow\infty,\\
\operatorname{Var}(X)&=3(1-p)\longrightarrow3,\\
\operatorname{SD}(X)&=\sqrt{3(1-p)}\\
&\longrightarrow\sqrt3.
\end{aligned}$$

The limiting model is $\operatorname{Po}(3)$. Reducing $p$ without increasing $n$ would not keep the mean fixed. Revisit [the limit](#moments-limit) if these conditions were omitted.

</details>

</section>

## Come back after another topic {#later-review}

After studying something else, try this with the earlier examples closed. Choose a model for each situation and explain why it fits. If you need a reminder, open the hint; treat that as supported practice rather than an unaided check.

<section class="lesson-check" markdown="1">

### A different pair of situations

**Question:** (a) Calls arrive independently at a constant mean rate of 2 per hour, singly rather than in batches. Find the probability of more than 1 call in 30 minutes. (b) Five students each independently have probability 0.2 of needing help. Find the probability that at least 1 of them needs help. State and justify a model for each count. Give probabilities to three significant figures.

<details markdown="1"><summary>Hint</summary>

What is fixed in each situation: a time interval, or a number of attempts? Consider the event complementary to the one asked for. If needed, revisit [the AS binomial model](/alevel/as-mathematics/binomial/#l21-concept): for $n$ independent trials with the same success probability $p$, the probability of no successes is $P(X=0)=(1-p)^n$.

</details>

<details markdown="1"><summary>Solution and next check</summary>

For (a), let $C$ count calls in half an hour. The stated assumptions support $C\sim\operatorname{Po}(1)$:

$$\begin{aligned}
P(C>1)&=1-P(C=0)\\
&\quad-P(C=1)\\
&=1-2e^{-1}\\
&=0.264241\ldots\approx0.264.
\end{aligned}$$

For (b), let $H$ count students needing help. There are five independent trials with the same success probability, so $H\sim\operatorname{B}(5,0.2)$:

$$\begin{aligned}
P(H\ge1)&=1-P(H=0)\\
&=1-0.8^5\\
&=0.67232\approx0.672.
\end{aligned}$$

Use the exact binomial model in (b); a small fixed number of trials is not a reason to choose a Poisson approximation. If the model choice was difficult, return to [Poisson conditions](#model) and [binomial conditions](/alevel/as-mathematics/binomial/#l21-concept), then close them and decide: would counting people needing help among four independent students with the same probability use the same model as (b)? Explain why.

</details>

</section>

<section class="lesson-check" markdown="1">

### Try it {#later-combine}

**Question:** Two independent production lines each make 200 items. Every item is independently faulty with probability 0.005. Estimate the probability of no faults across both lines. Explain the model, its conditions and why the estimate is not an exact binomial probability.

<details markdown="1"><summary>Hint</summary>

Identify the trials contributing to the total before calculating.

</details>

<details markdown="1"><summary>Solution and recovery</summary>

Across both lines there are 400 independent trials with common $p=0.005$. The exact count is $\operatorname{B}(400,0.005)$. Large $n$ and small $p$ support a Poisson approximation with mean 2:

$$P(D=0)\approx e^{-2}\approx0.135.$$

Alternatively approximate each line by $\operatorname{Po}(1)$ and add the independent approximating counts. The exact probability is $0.995^{400}$, not $e^{-2}$. If conditions were missed, revisit [approximation](#binomial-limit) and [retry](#retry-approx); if totals were mishandled, revisit [independent sums](#independent-sums) and [retry](#retry-sum).

</details>

</section>

## What comes next? {#next-step}

You have now met the S2.1 model conditions, interval means, probabilities by formula and cumulative table, moments, independent sums and the binomial limiting approximation. Close the solutions and use the independent tasks to check which ideas you can apply without help.

Continue to [continuous random variables](/alevel/a2-mathematics/statistics/continuous-random-variables/): what changes when an outcome can lie anywhere in an interval? Return to the [Statistics course](/alevel/a2-mathematics/statistics/) for the full route.

<details markdown="1"><summary>Sources and scope</summary>

OxfordAQA Mathematics 9660 v5.2, S2.1, printed page 25 (PDF page 24): [current qualification](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/) and [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). This page covers S2.1, not the whole MA04 course. Formal derivations of the limiting distribution and sum rule are not required.

Original Q4(b)(i)(ii): [MA04 January 2025 question paper, pages 12–13](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-question-paper.pdf#page=12), read with [final mark scheme, page 10](/assets/pdf/fx-cg50/references/oxfordaqa-ma04-2025-january-mark-scheme.pdf#page=10). English wording, data and requirements are retained; solutions add explanation. Q1(c), question paper page 3 and mark scheme pages 4–5, was also read to check the approximation conditions and mean. Other examples and tasks are self-written, with no official marks. No calculator key sequence or student learning outcome has been device- or classroom-validated here.

</details>
