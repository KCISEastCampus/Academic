---
layout: subjects
title: "A2 Mathematics · Statistics"
mathjax: true
grade: a2
subject: s2
permalink: /alevel/a2-mathematics/statistics/
reading_layout: true
study_page: true
toc_headings: "#start-learning, #learning-route, #mixed-review, #later-review, #reference-notes"
---

## Start learning {#start-learning}

How many events occur, how long must we wait, and what can a sample tell us? These questions call for different statistical models. We first identify the quantity, then use probability, estimation or testing to make a careful judgment.

Start with [Poisson counts](/alevel/a2-mathematics/statistics/poisson-distribution/), or choose a topic below if you have the prerequisites. Attempt tasks before opening help; use the specific recovery links and try again. All course-review tasks below are self-written, with no official marks.

Prerequisite recovery: [AS probability](/alevel/as-mathematics/probability/#l18-concept) · [random variables](/alevel/as-mathematics/random-variables/#l19-concept) · [binomial models](/alevel/as-mathematics/binomial/#l21-concept) · [integration](/alevel/a2-mathematics/integration/).

## Learning route {#learning-route}

1. **[Count events](/alevel/a2-mathematics/statistics/poisson-distribution/)** — Choose an interval, check the assumptions and handle counts or a justified approximation.
2. **[Probability as area](/alevel/a2-mathematics/statistics/continuous-random-variables/)** — Read density and cumulative probability, then calculate averages, spread and transformed quantities.
3. **[Waiting time](/alevel/a2-mathematics/statistics/exponential-distribution/)** — Connect no arrivals with waiting longer, and find intervals or time cut-offs.
4. **[The normal model](/alevel/a2-mathematics/statistics/normal-distribution/)** — Use areas and standardisation, work backwards from probabilities and combine independent normal variables.
5. **[Learn from a sample](/alevel/a2-mathematics/statistics/estimation/)** — Distinguish a measurement from a sample mean, estimate spread and choose exact or approximate sampling models.
6. **[Test counts and proportions](/alevel/a2-mathematics/statistics/hypothesis-testing/)** — Set hypotheses, choose a tail and check integer critical boundaries before making a contextual decision.
7. **[Test a population mean](/alevel/a2-mathematics/statistics/mean-tests/)** — Choose a mean test from the population, sample size and variance information, then explain its limits.

## Put the ideas together {#mixed-review}

These tasks are not labelled by method. Define the quantity, model and conditions before calculating. Record whether you needed a hint; completion with help is different from independent work.

<details markdown="1">
<summary>Statistical reference values: choose your method before consulting</summary>

These quantiles cover two reference distributions; the table does not choose the appropriate model for you.

| Reference distribution | Upper-tail area | Positive boundary |
| --- | --- | --- |
| Standard normal | 0.05 | 1.6449 |
| Standard normal | 0.025 | 1.9600 |
| Student t, df = 8 | 0.05 | 1.8595 |
| Student t, df = 8 | 0.025 | 2.3060 |

Both distributions are symmetric; a left-tail boundary is the negative of the corresponding positive value.

</details>

<section class="lesson-check" markdown="1">

### Task 1 {#mixed-a}

**Question:** A help desk receives messages according to a Poisson process at a mean rate of 2 per hour. Find (a) the probability of at least one message in 90 minutes and (b) the probability that the wait for the next message exceeds 45 minutes. Explain why the means or rates used in the two calculations differ.

<details markdown="1">
<summary>Hint</summary>

Define the interval for the count; for waiting, describe the event that no message arrives.

</details>

<details markdown="1">
<summary>Solution and checks</summary>

For the 90-minute count, $X\sim\operatorname{Po}(3)$, so $P(X\ge1)=1-e^{-3}\approx0.950$. For waiting, use the rate $r=2$ per hour and $t=0.75$ hours. Waiting beyond this point means zero events in 45 minutes, so $P(T>0.75)=e^{-1.5}\approx0.223$. The rate stays 2 per hour; the count mean depends on the interval.

Repair the specific error, then close this solution and attempt the linked new retry:

- Wrong count interval: [概念 / concept](/alevel/a2-mathematics/statistics/poisson-distribution/#interval) → [新重试 / new retry](/alevel/a2-mathematics/statistics/poisson-distribution/#retry-count).
- Confusing waits and counts: [概念 / concept](/alevel/a2-mathematics/statistics/exponential-distribution/#zero-bridge) → [新重试 / new retry](/alevel/a2-mathematics/statistics/exponential-distribution/#retry-bridge).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task 2 {#mixed-b}

**Question:** A continuous random variable has density $f(x)=2x/9$ for $0\le x\le3$ and zero elsewhere. Verify that it is a density and find its mean and variance. For $Y=4-2X$, find the mean and variance. Two independent variables $X_1,X_2$ each have this density; find the mean and variance of $X_1+X_2$.

<details markdown="1">
<summary>Hint</summary>

Check non-negativity and total area first. For moments, integrate the value times its density. A scale factor is squared in a variance.

</details>

<details markdown="1">
<summary>Solution and checks</summary>

The density is non-negative. Check total area, then the first and second moments:

$$\begin{aligned}
\int_0^3\frac{2x}{9}\,dx
&=\left[\frac{x^2}{9}\right]_0^3=1,\\
E(X)&=\int_0^3\frac{2x^2}{9}\,dx\\
&=\left[\frac{2x^3}{27}\right]_0^3=2,\\
E(X^2)&=\int_0^3\frac{2x^3}{9}\,dx\\
&=\left[\frac{x^4}{18}\right]_0^3=\frac92,\\
\operatorname{Var}(X)&=\frac92-2^2=\frac12.
\end{aligned}$$

$$\begin{aligned}
E(Y)&=4-2(2)=0,\\
\operatorname{Var}(Y)&=(-2)^2\left(\frac12\right)=2.
\end{aligned}$$

The independent sum has mean 4 and variance 1. Independence is needed for that variance addition, not for adding expectations.

Repair the specific error, then close this solution and attempt the linked new retry:

- Moment or scale-variance error: [概念 / concept](/alevel/a2-mathematics/statistics/continuous-random-variables/#moments) → [新重试 / new retry](/alevel/a2-mathematics/statistics/continuous-random-variables/#retry-moments).
- Independence or sum-variance error: [概念 / concept](/alevel/a2-mathematics/statistics/continuous-random-variables/#combinations) → [新重试 / new retry](/alevel/a2-mathematics/statistics/continuous-random-variables/#retry-combinations).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task 3 {#mixed-c}

**Question:** Packet masses are independent and normally distributed with unknown mean $\mu$ and known standard deviation 4 g. A random sample of 25 packets has mean 501.5 g. At the 5% level, test the claim that the population mean exceeds 500 g. Choose and justify a test before consulting the statistical reference values. Explain what a Type I error would mean here.

<details markdown="1">
<summary>Hint</summary>

Write hypotheses about the population mean. Find the standard deviation of the sample mean, not of one packet.

</details>

<details markdown="1">
<summary>Solution and checks</summary>

Use $H_0:\mu=500$ and $H_1:\mu>500$. Under $H_0$, $\bar X\sim N(500,16/25)$ exactly, so $SE=4/\sqrt{25}=0.8$ and $z=(501.5-500)/0.8=1.875$. Since $1.875>1.6449$, reject $H_0$. There is sufficient evidence at the 5% level that the population mean exceeds 500 g. A Type I error is rejecting $H_0$ when it is true: concluding there is evidence of a mean above 500 g when the true mean is 500 g. It is not a 5% probability that this particular conclusion is wrong.

Repair the specific error, then close this solution and attempt the linked new retry:

- Standard-error error: [概念 / concept](/alevel/a2-mathematics/statistics/mean-tests/#standard-error) → [新重试 / new retry](/alevel/a2-mathematics/statistics/mean-tests/#retry-se).
- Mean-test choice error: [概念 / concept](/alevel/a2-mathematics/statistics/mean-tests/#known-normal) → [新重试 / new retry](/alevel/a2-mathematics/statistics/mean-tests/#retry-known).
- Error-type confusion: [概念 / concept](/alevel/a2-mathematics/statistics/hypothesis-testing/#errors) → [新重试 / new retry](/alevel/a2-mathematics/statistics/hypothesis-testing/#retry-errors).

</details>

</section>

## Return after further study {#later-review}

After studying other topics, return to these tasks without the earlier solutions. Compare your model choices and reasons. If still unsure, repair the linked concept and then start a new attempt.

<section class="lesson-check" markdown="1">

### Task 4 {#later-a}

**Question:** (a) Under a proposed exponential model with mean 5 minutes, find the median waiting time. (b) At a separate desk, independent waiting times have a mildly right-skewed population distribution with finite but unknown mean and variance. A random sample of 100 waits has mean 5.8 minutes and sample standard deviation 5 minutes. Test $H_0:\mu=5$ against $H_1:\mu\ne5$ at the 5% level. Choose and justify a method before consulting the statistical reference values, and explain whether its sampling model is exact or approximate.

<details markdown="1">
<summary>Hint</summary>

For the median, half the waits are longer. For the test, distinguish a waiting time from the average of 100 waits.

</details>

<details markdown="1">
<summary>Solution and checks</summary>

The rate is $r=1/5$. The median satisfies $e^{-m/5}=1/2$, giving $m=5\ln2\approx3.47$ minutes. In (b), the separate desk has a mildly skewed, finite-variance population. Together with independence and the large sample, these conditions support a CLT approximation; the population itself is not normal. The estimated $SE=5/\sqrt{100}=0.5$, hence $z=(5.8-5)/0.5=1.6$. Since $-1.96<1.6<1.96$, do not reject $H_0$. There is insufficient evidence at the 5% level that the population mean differs from 5 minutes. This does not prove the mean equals 5. The normal approximation and estimated standard error make this an approximate test.

Repair the specific error, then close this solution and attempt the linked new retry:

- Median or tail error: [概念 / concept](/alevel/a2-mathematics/statistics/exponential-distribution/#quantiles) → [新重试 / new retry](/alevel/a2-mathematics/statistics/exponential-distribution/#retry-quantile).
- Unknown variance or approximation-condition error: [概念 / concept](/alevel/a2-mathematics/statistics/mean-tests/#large-samples) → [新重试 / new retry](/alevel/a2-mathematics/statistics/mean-tests/#retry-large-unknown).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task 5 {#later-b}

**Question:** In 20 independent trials with a common success probability $p$, 7 successes are observed. Test $H_0:p=0.2$ against $H_1:p>0.2$ at the 5% level. Find the smallest upper critical value, show the two neighbouring tail probabilities and state the actual significance level. Choose a probability model and justify whether any approximation is needed.

<details markdown="1">
<summary>Hint</summary>

The rejection region is an upper tail of whole-number counts. Check the first admissible boundary and its neighbour.

</details>

<details markdown="1">
<summary>Solution and checks</summary>

Under $H_0$, $X\sim B(20,0.2)$. Exact binomial probabilities give $P(X\ge7)\approx0.08669$ and $P(X\ge8)\approx0.03214$. Thus the smallest upper critical value is 8 and the rejection region is $X\ge8$. Its actual significance level is about 3.21%, below the nominal 5% because counts are discrete. The observation 7 is outside this region, so do not reject $H_0$: there is insufficient evidence that the success probability exceeds 0.2. The exact binomial model is available; 20 and 0.2 do not give a compelling large-$n$, small-$p$ approximation case.

Repair the specific error, then close this solution and attempt the linked new retry:

- Model or integer-boundary error: [概念 / concept](/alevel/a2-mathematics/statistics/hypothesis-testing/#discrete-choice) → [新重试 / new retry](/alevel/a2-mathematics/statistics/hypothesis-testing/#retry-binomial).
- Significance or conclusion error: [概念 / concept](/alevel/a2-mathematics/statistics/hypothesis-testing/#decision) → [新重试 / new retry](/alevel/a2-mathematics/statistics/hypothesis-testing/#retry-regions).

</details>

</section>

## Scope and reference notes {#reference-notes}

The seven lessons address S2.1–S2.6 of OxfordAQA 9660 v5.2, Unit S2 (MA04). Calculator button sequences are not claimed as hardware-verified here. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf).

<details markdown="1" id="legacy-reference">
<summary>Older English reference notes — retained for lookup</summary>

# S2 (Statistics)

> **Qualification**: OxfordAQA International A-level Mathematics (9660), Unit S2 (MA04). See the [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf) for the assessed scope.

## S2.1: Poisson Distribution

### Conditions for a Poisson Distribution
A Poisson distribution models the number of events occurring in a fixed interval of time or space, given that:
- Events occur **independently**.
- Events occur at a **constant average rate** $r$ per unit time or space.
- Two events cannot occur at exactly the same instant.

### Notation
$$X \sim \text{Po}(\lambda)$$
where $\lambda$ is the mean number of events in the chosen interval. For an interval of length $t$ and rate $r$, $\lambda=rt$.

### Probability Mass Function
$$P(X = x) = \frac{e^{-\lambda} \lambda^x}{x!}, \quad x = 0, 1, 2, \dots$$

### Mean and Variance
$$E(X) = \lambda, \quad \text{Var}(X) = \lambda$$

### Poisson as Limiting Form of Binomial
When $n$ is large and $p$ is small, with $\lambda = np$:
$$\text{Bin}(n, p) \approx \text{Po}(\lambda)$$

### Sum of Independent Poisson Variables
If $X \sim \text{Po}(\lambda_1)$ and $Y \sim \text{Po}(\lambda_2)$ are independent:
$$X + Y \sim \text{Po}(\lambda_1 + \lambda_2)$$

### Example
The number of cars passing a point on a road follows a Poisson distribution with mean 3 per minute. Find the probability that exactly 5 cars pass in 2 minutes.

**Solution:**
For 2 minutes: $\lambda = 3 \times 2 = 6$

$$P(X = 5) = \frac{e^{-6} \times 6^5}{5!} = \frac{e^{-6} \times 7776}{120} \approx 0.1606$$

---

## S2.2: Continuous Random Variables

### Probability Density Function (PDF)
For a continuous random variable $X$:
- $f(x) \geq 0$ for all $x$
- $\int_{-\infty}^{\infty} f(x) \, dx = 1$

**Probability in an interval:**
$$P(a < X < b) = \int_a^b f(x) \, dx$$

### Cumulative Distribution Function (CDF)
$$F(x) = P(X \leq x) = \int_{-\infty}^x f(t) \, dt$$

**Relationship:**
$$f(x) = \frac{d}{dx}F(x)$$
at points where $F$ is differentiable.

### Mean and Variance

| Quantity | Formula |
|----------|---------|
| Expected value | $E(X) = \mu = \int_{-\infty}^{\infty} x f(x) \, dx$ |
| Expected value of $g(X)$ | $E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) \, dx$ |
| Variance | $\text{Var}(X) = E(X^2) - [E(X)]^2 = \int_{-\infty}^{\infty} x^2 f(x) \, dx - \mu^2$ |

### Linear Transformations
- $E(aX + b) = aE(X) + b$
- $\text{Var}(aX + b) = a^2 \text{Var}(X)$

### Sum of Independent Continuous Random Variables
If $X$ and $Y$ are independent:
- $E(aX \pm bY) = aE(X) \pm bE(Y)$
- $\text{Var}(aX \pm bY) = a^2 \text{Var}(X) + b^2 \text{Var}(Y)$

### Example
A continuous random variable has PDF $f(x) = kx^2$ for $0 \leq x \leq 3$ and $f(x)=0$ otherwise. Find $k$, $E(X)$, and $\text{Var}(X)$.

**Solution:**
$$\int_0^3 kx^2 \, dx = k \left[\frac{x^3}{3}\right]_0^3 = k \times \frac{27}{3} = 9k = 1 \Rightarrow k = \frac{1}{9}$$

$$E(X) = \int_0^3 x \cdot \frac{1}{9}x^2 \, dx = \frac{1}{9} \int_0^3 x^3 \, dx = \frac{1}{9} \left[\frac{x^4}{4}\right]_0^3 = \frac{1}{9} \times \frac{81}{4} = \frac{9}{4} = 2.25$$

$$E(X^2) = \int_0^3 x^2 \cdot \frac{1}{9}x^2 \, dx = \frac{1}{9} \int_0^3 x^4 \, dx = \frac{1}{9} \left[\frac{x^5}{5}\right]_0^3 = \frac{1}{9} \times \frac{243}{5} = \frac{27}{5} = 5.4$$

$$\text{Var}(X) = E(X^2) - [E(X)]^2 = 5.4 - (2.25)^2 = 5.4 - 5.0625 = 0.3375$$

---

## S2.3: Exponential Distribution

### Conditions for an Exponential Distribution
The exponential distribution models the **time between events** in a Poisson process.

If events occur at a constant rate $\lambda>0$ per unit time, the waiting time $T$ between consecutive events follows:
$$T \sim \text{Exp}(\lambda)$$

### Probability Density Function
$$f(t) = \lambda e^{-\lambda t}, \quad t \geq 0$$

### Cumulative Distribution Function
$$F(t) = P(T \leq t) = 1 - e^{-\lambda t}, \quad t \geq 0$$

### Mean and Variance
$$E(T) = \frac{1}{\lambda}, \quad \text{Var}(T) = \frac{1}{\lambda^2}$$

### Memoryless Property
$$P(T > t + s \mid T > s) = P(T > t)$$
For $s,t\geq0$, the exponential distribution is memoryless: the remaining waiting time does not depend on how long you've already waited.

### Example
The time between arrivals at a service centre follows an exponential distribution with mean 5 minutes. Find the probability that the next customer arrives in less than 3 minutes.

**Solution:**
Mean $= 5 = \frac{1}{\lambda} \Rightarrow \lambda = 0.2$

$$P(T < 3) = 1 - e^{-0.2 \times 3} = 1 - e^{-0.6} \approx 1 - 0.5488 = 0.4512$$

---

## S2.4: Normal Distribution

### Properties
- $X\sim N(\mu,\sigma^2)$ with $\sigma>0$.
- Symmetric about the mean $\mu$
- Bell-shaped curve
- Approximately 68% of data within $\mu \pm \sigma$, 95% within $\mu \pm 2\sigma$, 99.7% within $\mu \pm 3\sigma$

### Standardisation
$$Z = \frac{X - \mu}{\sigma} \sim N(0, 1)$$

### Using Tables
- $P(Z \leq z)$ given in tables (cumulative probabilities)
- For $P(Z > z) = 1 - P(Z \leq z)$
- For $P(z_1 < Z < z_2) = P(Z \leq z_2) - P(Z \leq z_1)$

### Finding Unknown $\mu$ and/or $\sigma$
Use inverse normal (percentage points) tables.

### Sum of Independent Normal Variables
If $X \sim N(\mu_X, \sigma_X^2)$ and $Y \sim N(\mu_Y, \sigma_Y^2)$ are independent:
$$X + Y \sim N(\mu_X + \mu_Y, \sigma_X^2 + \sigma_Y^2)$$

### Example
The heights of students are normally distributed with mean 165 cm and standard deviation 8 cm. Find the probability that a randomly selected student is taller than 175 cm.

**Solution:**
$$Z = \frac{175 - 165}{8} = \frac{10}{8} = 1.25$$

$$P(X > 175) = P(Z > 1.25) = 1 - P(Z \leq 1.25) = 1 - 0.8944 = 0.1056$$

---

## S2.5: Estimation

### Key Terms

| Term | Definition |
|------|------------|
| **Population** | Entire group of interest |
| **Sample** | Subset of population used to estimate population parameters |
| **Parameter** | Numerical characteristic of a population (e.g., $\mu$, $\sigma^2$) |
| **Statistic** | Numerical characteristic of a sample (e.g., $\bar{x}$, $s^2$) |
| **Unbiased estimator** | $E(\text{estimator}) = \text{parameter}$ |

### Unbiased Estimators

| Parameter | Unbiased Estimator |
|-----------|-------------------|
| Population mean $\mu$ | Sample mean $\bar{X} = \frac{1}{n}\sum X_i$ |
| Population variance $\sigma^2$ | $S^2 = \frac{1}{n-1}\sum (X_i - \bar{X})^2$ |

### Sampling Distribution of the Sample Mean
If $X_1, X_2, \dots, X_n$ are i.i.d. with $E(X_i) = \mu$ and $\text{Var}(X_i) = \sigma^2$:
- $E(\bar{X}) = \mu$
- $\text{Var}(\bar{X}) = \frac{\sigma^2}{n}$
- Standard error: $\text{SE} = \frac{\sigma}{\sqrt{n}}$ (estimated by $\frac{s}{\sqrt{n}}$)

### Central Limit Theorem (CLT)
For independent, identically distributed observations with finite mean $\mu$ and finite variance $\sigma^2>0$, the sampling distribution of $\bar X$ is approximately normal for sufficiently large $n$:
$$\bar{X} \approx N\left(\mu, \frac{\sigma^2}{n}\right)$$
The required sample size depends on the population distribution. The rule $n\geq30$ is a guide, not a guarantee, especially for strongly skewed distributions.

### Sampling from a Normal Population
For an independent random sample from a population $N(\mu, \sigma^2)$, for any sample size $n$:
$$\bar{X} \sim N\left(\mu, \frac{\sigma^2}{n}\right)$$

---

## S2.6: Hypothesis Testing

### Key Concepts

| Term | Definition |
|------|------------|
| **Null hypothesis** $H_0$ | Statement assumed true (e.g., $\mu = \mu_0$) |
| **Alternative hypothesis** $H_1$ | Statement we test against (e.g., $\mu \neq \mu_0$, $\mu > \mu_0$, $\mu < \mu_0$) |
| **Significance level** $\alpha$ | Chosen upper bound on the probability of a Type I error (typically 0.05 or 0.01); a discrete test may have an actual probability below this bound |
| **Test statistic** | Value calculated from sample data |
| **Critical region** | Set of values leading to rejection of $H_0$ |
| **Critical value** | Boundary of the critical region |
| **p-value** | Under $H_0$, the probability of a test statistic at least as extreme as the observed value, in the direction(s) specified by $H_1$ |
| **Type I error** | Reject $H_0$ when $H_0$ is true |
| **Type II error** | Accept $H_0$ when $H_0$ is false |

Accepting (or not rejecting) $H_0$ means that the test provides insufficient evidence against it; it does not prove $H_0$ true. The mean tests below assume an independent random sample.

### Tests for a Population Proportion
- Use **exact binomial probabilities**.
- $H_0: p = p_0$

### Tests for the Mean of a Poisson Distribution
- Use **exact Poisson probabilities**.
- $H_0: \lambda = \lambda_0$

### Tests for the Mean of a Normal Distribution (known variance)
- $H_0: \mu = \mu_0$
- Test statistic: $Z = \frac{\bar{X} - \mu_0}{\sigma / \sqrt{n}} \sim N(0, 1)$ under $H_0$

### Tests for the Mean of a Normal Distribution (unknown variance)
- $H_0: \mu = \mu_0$
- Use the unbiased sample variance $s^2=\frac{1}{n-1}\sum(x_i-\bar x)^2$; the exact $t$ distribution requires a normal population.
- Test statistic: $t = \frac{\bar{X} - \mu_0}{s / \sqrt{n}} \sim t_{n-1}$ under $H_0$

### Large-Sample Tests for a Population Mean
For a sufficiently large independent random sample, use $z=(\bar x-\mu_0)/(\sigma/\sqrt n)$ when the population variance is known. If it is unknown, use $s/\sqrt n$ as the estimated standard error. Justify the normal approximation using the central limit theorem. For the proportion and Poisson-mean tests required by this course, use exact binomial and exact Poisson probabilities.

### Example: One-Tailed $z$-Test
A manufacturer claims that light bulbs last 1000 hours on average. An independent random sample of 50 bulbs has mean 980 hours. Assume a normal population with known standard deviation $\sigma = 80$ hours. Test at $\alpha = 0.05$ whether the true mean is less than 1000.

**Solution:**
$H_0: \mu = 1000$, $H_1: \mu < 1000$ (one-tailed)

$$z = \frac{980 - 1000}{80 / \sqrt{50}} = \frac{-20}{80 / 7.071} = \frac{-20}{11.314} \approx -1.77$$

Critical value at $\alpha = 0.05$: $z_{0.05} = -1.645$ (since one-tailed left)

Since $-1.77 < -1.645$, reject $H_0$. There is evidence that the mean is less than 1000 hours.

---

## Key Formulae Summary

| Topic | Formula |
|-------|---------|
| Poisson probability | $P(X = x) = \frac{e^{-\lambda} \lambda^x}{x!}$ |
| Exponential PDF | $f(t) = \lambda e^{-\lambda t}$ |
| Exponential CDF | $F(t) = 1 - e^{-\lambda t}$ |
| Normal standardisation | $Z = \frac{X - \mu}{\sigma}$ |
| Unbiased variance estimator | $s^2 = \frac{1}{n-1} \sum (x_i - \bar{x})^2$ |
| Standard error of mean | $\text{SE} = \frac{\sigma}{\sqrt{n}}$ |
| $z$-test statistic | $z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$ |
| $t$-test statistic | $t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$ |


</details>
