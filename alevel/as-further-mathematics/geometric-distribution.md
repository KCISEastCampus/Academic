---
title: "Geometric trials and moment derivations"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/geometric-distribution/
toc_headings: "#start, #model, #tails, #moment-foundation, #demonstration, #failures, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

How long do we wait for a first success, and why do its mean and variance have their particular forms? Start by deciding what is counted. Then connect the outcome sequence to probabilities and derive the moments from the distribution.

Work through [the model](#model) and [the moment derivation](#demonstration), then close the examples for the [independent tasks](#practice). You should be able to justify a model, distinguish its tails and derive both moments, including the boundary case.

## Before you start {#start}

You need independent-event multiplication, conditional probability, expectation and basic differentiation. Revisit [AS probability](/alevel/as-mathematics/probability/#l18) for changed denominators and [partial sums and limits](/alevel/as-further-mathematics/series/#infinite-sums) for infinite sums. The necessary moment definitions and geometric-series differentiation are developed below; PGFs are not a prerequisite.

<section class="lesson-check" markdown="1">

### Prerequisite check

**Entry check (self-written):** Independent trials have success probability $0.4$. Find the probability of the sequence failure, failure, success. Separately, $Z$ takes values 1 and 2 with probability $1/2$ each. Find $E(Z)$, $E(Z^2)$ and $\operatorname{Var}(Z)$.

<details markdown="1"><summary>Hint</summary>

Multiply the three probabilities in order. For the second part, weight each value, or its square, by its probability before adding.

</details>

<details markdown="1"><summary>Check and repair</summary>

The sequence probability is $0.6\times0.6\times0.4=0.144$. Independence allows multiplication; there is only one specified order, so no rearrangement factor is needed.

$$\begin{aligned}
E(Z)&=1\left(\frac12\right)+2\left(\frac12\right)=\frac32,\\
E(Z^2)&=1^2\left(\frac12\right)+2^2\left(\frac12\right)=\frac52,\\
\operatorname{Var}(Z)&=\frac52-\left(\frac32\right)^2=\frac14.
\end{aligned}$$

If you squared the probabilities rather than the values, rebuild a two-row table with columns for value, probability and squared value. Check directly that each value is $1/2$ from the mean, so each squared deviation is $1/4$. For probability errors, revisit the linked AS lesson before continuing.

</details>

</section>

## 1. Count the first success {#model}

Define a success before starting. Each trial has two outcomes, the trials are independent, and the success probability is the same $p$ on every trial, with $0<p\le1$. We continue until the first success. Let $q=1-p$, and let $X$ count **trials up to and including the first success**.

For $0<p<1$, its support (values with positive probability) is $1,2,3,\ldots$. In the sequence failure, failure, success, $X=3$: two failures precede that success. More generally, $X=k$ requires exactly $k-1$ failures followed by success. Independence gives

$$P(X=k)=q^{k-1}p,\qquad k=1,2,\ldots.$$

The exponent counts failures, not the trial on which success occurs. No binomial coefficient is needed: first success fixes the order. To check that this is a complete probability distribution, first sum a finite list and then let its upper endpoint increase:

$$\begin{aligned}
\sum_{k=1}^n P(X=k)&=p\frac{1-q^n}{1-q}=1-q^n,\\
\lim_{n\to\infty}(1-q^n)&=1\qquad(0<q<1).
\end{aligned}$$

There is no fixed last trial, but the probability of never succeeding is zero. If $p=0$, a first success never occurs, so this finite-valued waiting-time model does not apply. If $p=1$, $X=1$ with certainty: the support reduces to $\{1\}$, and all other masses are zero. A product of no failure factors is one; use this directly at the boundary rather than trying to interpret $0^0$.

Sampling without replacement generally changes the probability and makes trials dependent. A geometric model needs an explicit independent, constant-probability mechanism, not merely the instruction “stop at the first success”.

### Read the tail as an event {#tails}

For integer $k\ge0$, $X>k$ means that all the first $k$ trials failed; it does not specify what happens next. Thus

$$P(X>k)=q^k,\qquad P(X\le k)=1-q^k.$$

For integer $k\ge1$, $X\ge k$ instead means no success in the first $k-1$ trials:

$$P(X\ge k)=q^{k-1}.$$

| Wording | Event | Failures already required |
| --- | --- | --- |
| More than four trials | $X>4$ | First four |
| At least four trials | $X\ge4$ | First three |
| By trial four | $X\le4$ | Complement of first four failures |

At $k=0$, $P(X>0)=1$. At $p=1$, $P(X>k)=0$ for every integer $k\ge1$. Conditional probabilities still require a positive-probability conditioning event: an event that is impossible at $p=1$ cannot be used as a denominator.

## 2. Build the moments from probabilities {#moment-foundation}

For a discrete variable with probabilities $P(X=k)$, expectation weights each possible value by its probability. The second raw moment weights its square. Variance is the mean squared distance from the mean:

$$\begin{aligned}
E(X)&=\sum_k kP(X=k),\\
E(X^2)&=\sum_k k^2P(X=k),\\
\operatorname{Var}(X)&=E[(X-E(X))^2]\\
&=E(X^2)-[E(X)]^2.
\end{aligned}$$

The last equality follows by expanding the square and using that $E(X)$ is a constant. Do not replace $E(X^2)$ with $[E(X)]^2$.

The geometric-series identity gives us the weighted sums we need. Use a separate variable $t$ for differentiation, keeping the model parameter $p$ fixed. The finite identity has remainder $t^{n+1}$, which tends to zero when $\lvert t\rvert<1$:

$$\begin{aligned}
\sum_{k=0}^n t^k&=\frac{1-t^{n+1}}{1-t},\\
S(t)=\sum_{k=0}^\infty t^k&=\frac1{1-t}
\qquad(\lvert t\rvert<1).
\end{aligned}$$

Inside a power series' radius of convergence, term-by-term differentiation is valid. We use that rule here, not a rule permitting differentiation of arbitrary infinite sums. The ordinary chain rule gives the positive derivative of $(1-t)^{-1}$: the exponent's minus sign and the derivative of $1-t$ cancel.

### A continuous derivation {#demonstration}

<section class="worked-example" markdown="1">

#### From weights to mean, then variance

**Derivation (self-written):** Starting from $P(X=k)=pq^{k-1}$, derive $E(X)$ and $\operatorname{Var}(X)$ for every $0<p\le1$, where $q=1-p$.

First take $0<p<1$, so $0<q<1$. Differentiate with respect to $t$ once and then twice:

$$\begin{aligned}
S'(t)&=\sum_{k=1}^\infty kt^{k-1}=\frac1{(1-t)^2},\\
S''(t)&=\sum_{k=2}^\infty k(k-1)t^{k-2}\\
&=\frac2{(1-t)^3}.
\end{aligned}$$

The first derivative has exactly the factor $k$ and exponent $k-1$ in the mean's defining sum. Set $t=q$ and multiply by $p$:

$$\begin{aligned}
E(X)&=p\sum_{k=1}^\infty kq^{k-1}\\
&=\frac{p}{(1-q)^2}=\frac1p.
\end{aligned}$$

The second derivative gives $k(k-1)$, not $k^2$. It therefore fits the factorial moment $E[X(X-1)]$. Its exponent is $k-2$, whereas each probability contains $q^{k-1}$; multiplying by one extra $q$ repairs that difference:

$$\begin{aligned}
E[X(X-1)]&=p\sum_{k=2}^\infty k(k-1)q^{k-1}\\
&=pq\sum_{k=2}^\infty k(k-1)q^{k-2}\\
&=\frac{2pq}{(1-q)^3}=\frac{2q}{p^2}.
\end{aligned}$$

The $k=1$ term is zero, which explains the lower limit two. For fixed $0<q<1$, the ratios of successive terms in the first- and second-moment sums tend to $q<1$, so these sums converge. We are not subtracting divergent moments.

Now use the pointwise identity $X^2=X(X-1)+X$ to recover the second raw moment, then subtract the square of the mean:

$$\begin{aligned}
E(X^2)&=\frac{2q}{p^2}+\frac1p\\
&=\frac{2q+p}{p^2}=\frac{2-p}{p^2},\\
\operatorname{Var}(X)&=\frac{2q+p-1}{p^2}\\
&=\frac{q}{p^2}.
\end{aligned}$$

The simplification uses $p+q=1$. Variance is nonnegative and becomes larger as successes become rare, consistent with more variable waiting times. Finally, at $p=1$, $X=1$ is constant: its mean is one and its variance zero. These agree with the formulas and complete the boundary check without dividing by $q$.

</section>

<section class="worked-example" markdown="1">

#### Read the sequence before calculating {#probability-example}

**Demonstration (self-written):** For $p=0.25$, find $P(X=3)$, $P(X>4)$ and the moments.

Here $q=0.75$. First success on trial three fixes two failures and then a success. Waiting longer than four trials fixes four failures, with no success factor:

$$\begin{aligned}
P(X=3)&=0.75^2(0.25)=0.140625,\\
P(X>4)&=0.75^4=0.31640625,\\
E(X)&=4,\qquad\operatorname{Var}(X)=12.
\end{aligned}$$

Check the difference in wording: at least four trials has probability $0.75^3=0.421875$. The moments use the formulas just derived. The mean is measured in trials; the variance in squared trials. A mean of four does not say that the first success must occur on trial four.

</section>

### Change what is counted {#failures}

Let $Y$ count failures before the first success. Every recorded sequence then has one fewer count, so

$$\begin{aligned}
&Y=X-1,\\
&P(Y=j)=q^jp,\\
&j=0,1,2,\ldots.
\end{aligned}$$

For $0<p<1$, the support starts at zero. Subtracting one shifts all values and their mean by one, but leaves their distances from the mean unchanged:

$$\begin{aligned}
E(Y)&=E(X)-1=\frac{q}{p},\\
Y-E(Y)&=(X-1)-(E(X)-1)\\
&=X-E(X),\\
\operatorname{Var}(Y)&=\operatorname{Var}(X)=\frac{q}{p^2}.
\end{aligned}$$

At $p=1$, $Y=0$ with certainty, so its support is $\{0\}$. A shift changes the mean, not the variance; do not subtract one from both.

<section class="lesson-check" markdown="1">

#### Pause and connect the count

**Scaffold (self-written):** Explain why $P(X=1)=p$, and fill the missing exponent in $P(X=5)=q^{\square}p$.

<details markdown="1"><summary>Hint</summary>

Write the complete sequence ending at its first success. Count only the failures in the exponent.

</details>

<details markdown="1"><summary>Solution and check</summary>

No failures precede success on trial 1; four failures precede success on trial 5, so the exponent is 4.

</details>

</section>

## Work independently {#practice}

Close the examples. Write the events and reasoning, not only answers; the second task requires both derivations. Every task here is **self-written**, with no official marks. Open hints and solutions separately, and record any help you use.

<section class="lesson-check" markdown="1">

#### Question 1 {#practice-1}

**Independent task (self-written):** A geometric X satisfies $P(X>2)=0.36$. Find p, $P(X=4\mid X>2)$, $E(X)$ and $\operatorname{Var}(X)$. Would the same model apply to drawing cards without replacement until a red card appears? Explain.

<details markdown="1"><summary>Hint</summary>

Use the nonnegative square root for q and define the conditioning event before dividing probabilities. Check independence and constant probability in the card setting.

</details>

<details markdown="1"><summary>Solution and check</summary>

Since $q$ is a probability, reject the negative square root. The intersection of $X=4$ and $X>2$ is just $X=4$:

$$\begin{aligned}
&q^2=0.36\\
&\Rightarrow q=0.6,\\
&p=0.4,\\
&P(X=4\mid X>2)\\
&\quad=\frac{q^3p}{q^2}\\
&\quad=qp=0.24.
\end{aligned}$$

$$\begin{aligned}
&E(X)=2.5,\\
&\operatorname{Var}(X)=3.75.
\end{aligned}$$

The denominator is positive. After two failures, success on trial four still requires failure on trial three, then success. Cards without replacement do not have independent, constant-probability trials; the model needs replacement or another explicit independent-trial mechanism. For a wrong tail or denominator, return to [events](#tails), then try [retry 3](#retry-3).

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 2 {#practice-2}

**Independent task (self-written):** A random variable $T$ has $P(T=k)=p(1-p)^{k-1}$ for $k=1,2,\ldots$, where $0<p\le1$. Starting from these probabilities, derive its mean and variance for every allowed $p$. Justify the infinite-sum operations, distinguish the two second moments, and check the endpoint. Quoting geometric moment formulas is not a derivation.

<details markdown="1"><summary>Hint</summary>

Find a sum whose derivatives supply the weights in the moment definitions. Check the exponent as well as the coefficient after each differentiation. Deal with a constant variable directly.

</details>

<details markdown="1"><summary>Solution and check</summary>

Write $q=1-p$. For $0<p<1$, use $S(t)=(1-t)^{-1}$ on $\lvert t\rvert<1$, where it represents the geometric power series. Its termwise derivatives are valid there; $S'(t)=(1-t)^{-2}$ and $S''(t)=2(1-t)^{-3}$. Then

$$\begin{aligned}
E(T)&=pS'(q)=\frac{p}{(1-q)^2}=\frac1p,\\
E[T(T-1)]&=pqS''(q)=\frac{2q}{p^2},\\
E(T^2)&=E[T(T-1)]+E(T)\\
&=\frac{2q+p}{p^2},\\
\operatorname{Var}(T)&=E(T^2)-[E(T)]^2\\
&=\frac{2q+p-1}{p^2}=\frac{q}{p^2}.
\end{aligned}$$

Each step must be tied to a weighted probability sum: $S''$ supplies $k(k-1)q^{k-2}$, so the factor is $pq$, not just $p$. The sums are finite in value because their term ratios tend to $q<1$. At $p=1$, $T=1$ with certainty, giving mean one and variance zero.

If you used the second derivative as $E(T^2)$, expand $T(T-1)$ before continuing. If your variance lacks $q$, compare the exponents in [the derivation](#demonstration). Repair that step, close this solution, and do [retry 2](#retry-2); a numerical example alone does not establish the result for all $p$.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 3 {#practice-3}

**Independent task (self-written):** A device responds to each request independently with probability $0.2$. Let $N$ be the number of requests up to and including its first response, and $B$ the number of responses in the first three requests. Find $P(N\ge5)$, $P(B=1)$ and $E(N-1)$. Decide whether each variable has a geometric distribution and justify your decisions. If the response probability changes to 1, give both supports and decide whether $P(N>5\mid N>2)$ is defined.

<details markdown="1"><summary>Hint</summary>

One variable waits; the other observes a fixed window. List the possible positions of a single response in that window. Read the conditioning event separately at the endpoint.

</details>

<details markdown="1"><summary>Solution and check</summary>

The waiting time $N$ meets the geometric conditions. The event $N\ge5$ means four failures. For $B=1$, the three disjoint sequences are success–failure–failure, failure–success–failure, and failure–failure–success:

$$\begin{aligned}
P(N\ge5)&=0.8^4=0.4096,\\
P(B=1)&=3(0.2)(0.8)^2=0.384,\\
E(N-1)&=5-1=4.
\end{aligned}$$

$B$ has support $\{0,1,2,3\}$ and counts successes in a fixed number of trials; it is binomial, not geometric. At response probability one, $N=1$ and $B=3$, with supports $\{1\}$ and $\{3\}$. The event $N>2$ has probability zero, so the requested conditional probability is undefined, not zero. For count errors revisit [the model](#model); for tails and impossible conditions revisit [the event definitions](#tails), then do [retry 3](#retry-3).

</details>

</section>

## Diagnose and retry {#retry}

Match the retry to the difficulty. Off-by-one errors: return to [the count convention](#failures), then retry 1. Missing weights, powers or a second-moment conversion: return to [the continuous derivation](#demonstration), then retry 2. Model or tail errors: return to [the event interpretation](#tails), then retry 3. Close the earlier answers before starting again.

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-1}

**Retry (self-written):** For independent trials with $p=0.4$, let Y count failures before success. Find $P(Y=0)$, $E(Y)$ and $\operatorname{Var}(Y)$.

<details markdown="1"><summary>Hint</summary>

The shortest sequence is immediate success. Relate the count to the number of trials and compare deviations from their respective means.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&P(Y=0)=0.4,\\
&E(Y)=1.5,\\
&\operatorname{Var}(Y)=3.75.
\end{aligned}$$

Zero failures means success on the first trial. Subtracting one from the trial count changes its mean from $2.5$ to $1.5$ and leaves deviations unchanged, so the variance stays $3.75$.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-2}

**Retry (self-written):** Let $Y$ count failures before first success in independent trials with constant success probability $0<p\le1$. Starting from $P(Y=j)=p(1-p)^j$ for $j=0,1,2,\ldots$, derive $E(Y)$ and $\operatorname{Var}(Y)$ directly. Do not quote the moments of a trial count. Explain convergence, the conversion of the second moment, and the case $p=1$.

<details markdown="1"><summary>Hint</summary>

Your probabilities now contain power $j$. Differentiating an ordinary geometric series reduces that power: restore it before forming each expectation. Identify what the second derivative weights.

</details>

<details markdown="1"><summary>Solution and check</summary>

For $0<p<1$, set $q=1-p$ and use the convergent power series $S(t)=(1-t)^{-1}$ on $\lvert t\rvert<1$. The required weights are now $jq^j$ and $j(j-1)q^j$, so

$$\begin{aligned}
&E(Y)=pqS'(q)\\
&\quad=\frac{pq}{(1-q)^2}=\frac{q}{p},\\
&E[Y(Y-1)]=pq^2S''(q)\\
&\quad=\frac{2q^2}{p^2},\\
&E(Y^2)=\frac{2q^2}{p^2}+\frac{q}{p},\\
&\operatorname{Var}(Y)\\
&\quad=\frac{2q^2+pq-q^2}{p^2}\\
&\quad=\frac{q(q+p)}{p^2}=\frac{q}{p^2}.
\end{aligned}$$

The moment sums converge since their term ratios tend to $q<1$, and differentiation is inside the radius of convergence. At $p=1$, $Y=0$ with certainty, so both moments requested are zero. A missing $q^2$ in the factorial moment signals a failure to restore the powers; a missing $E(Y)$ in the raw moment signals confusion between $Y^2$ and $Y(Y-1)$.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 3 {#retry-3}

**Retry (self-written):** Independent tests detect a fault with probability $0.1$ on each test. Let $T$ count tests to the first detection. Find $P(T\ge3)$ and $P(T>5\mid T>2)$. In a different experiment, ten items contain exactly one faulty item and are checked in random order without replacement. Can the same geometric model describe its first faulty-item position? Compare the probabilities of no fault in the first five checks.

<details markdown="1"><summary>Hint</summary>

Count how many failures each event actually fixes. In the second experiment, consider the equally likely positions of the one faulty item and the maximum possible waiting time.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&P(T\ge3)=0.9^2=0.81,\\
&P(T>5\mid T>2)\\
&\quad=\frac{0.9^5}{0.9^2}\\
&\quad=0.9^3=0.729.
\end{aligned}$$

In the second experiment the first-fault position cannot exceed ten. Its successive probabilities change after a good item is removed, so the geometric assumptions fail. The faulty item's position is equally likely among ten places: no fault in the first five checks has probability $5/10=0.5$. For the independent tests it is $0.9^5=0.59049$. The same initial detection probability does not make the models the same.

</details>

</section>

## Return after learning PGFs {#later-review}

After the next lesson, return with these examples closed. Reconstruct the argument rather than copying a named distribution's formulas. Record whether you needed a hint; if the derivation still needs help, repeat it later with the help closed.

<section class="lesson-check" markdown="1">

#### Mixed review

**Later review (self-written):** A variable $W$ has probabilities $P(W=j)=ca^j$ for $j=0,1,2,\ldots$, where $0\le a<1$ and $c$ is constant. Find $c$, derive the mean and variance from these probabilities, and find $P(W\ge3)$. For $a>0$, find $P(W=2\mid W\ge1)$. Explain separately what happens when $a=0$; interpret $a^0$ as 1.

<details markdown="1"><summary>Hint</summary>

Probabilities must add to one before you compute any moments. Check the support's starting value, and state what a second derivative actually gives. For the conditional probability, first find the probability of its conditioning event.

</details>

<details markdown="1"><summary>Solution and check</summary>

For $0<a<1$, sum the geometric series, then obtain the weighted sums by valid differentiation inside its radius of convergence:

$$\begin{aligned}
&1=\frac{c}{1-a}\Rightarrow c=1-a,\\
&E(W)=\frac{ca}{(1-a)^2}\\
&\quad=\frac{a}{1-a},\\
&E[W(W-1)]\\
&\quad=\frac{2ca^2}{(1-a)^3}\\
&\quad=\frac{2a^2}{(1-a)^2},\\
&\operatorname{Var}(W)\\
&\quad=E[W(W-1)]+E(W)\\
&\qquad-[E(W)]^2\\
&\quad=\frac{2a^2+a(1-a)-a^2}{(1-a)^2}\\
&\quad=\frac{a}{(1-a)^2}.
\end{aligned}$$

The moments converge by geometric decay. Sum the tail from its first included value; do not change a non-strict inequality into a strict one:

$$\begin{aligned}
P(W\ge3)&=\frac{ca^3}{1-a}=a^3,\\
P(W\ge1)&=a,\\
P(W=2\mid W\ge1)&=\frac{ca^2}{a}=a(1-a).
\end{aligned}$$

At $a=0$, normalisation gives $c=1$ and $W=0$ with certainty. Both mean and variance and the tail are zero. The conditioning event has probability zero, so that conditional probability is undefined. If normalisation failed, return to [the probability sum](#model); for moment errors return to [the derivation](#demonstration) and retry 2; for an event boundary return to [tails](#tails) and retry 3.

</details>

</section>

## Where to go next {#next-step}

Continue to [probability generating functions](/alevel/as-further-mathematics/generating-functions/) when you can justify the model, derive both moments without help, pass the retry matching any earlier error and handle the constant boundary case. There you will encode this same probability distribution in a function. Afterwards, complete the [mixed review](#later-review) without reopening the examples first. If only formula substitution is secure, use [retry 2](#retry-2) before moving on.

## Sources and scope {#sources}

All demonstrations and student tasks are **self-written**, without official marks. Scope follows OxfordAQA 9665 v5.2, FS1.3: conditions, probabilities, and knowledge and derivations of mean and variance. We count trials from one, explicitly distinguish failures from zero and treat $p=1$ separately. The conditional-tail examples apply conditional probability; they are not an additional syllabus topic.

<details markdown="1"><summary>Official sources and actual reading</summary>

The current 9665 qualification page links to the specification below. For this revision, FS1.3 and FM02 June 2024 Q8(a) with its paired Final MS were read again. Q8(a) informs forming a cumulative-probability equation to find a parameter; the derivation requirement comes from FS1.3, not from that one question. These tasks do not reproduce the official question.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.3.
- FM02 June 2024 Q8(a); QP p.16, MS p.14. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

</details>

[Previous](/alevel/as-further-mathematics/discrete-uniform/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/generating-functions/)

{% include exam_topic_practice.html %}
