---
layout: subjects
title: A2 Math - Statistics
mathjax: true
grade: a2
subject: s2
---

# S2 (Statistics)

## S2.1: Poisson Distribution

### Conditions for a Poisson Distribution
A Poisson distribution models the number of events occurring in a fixed interval of time or space, given that:
- Events occur **independently**.
- Events occur at a **constant average rate** $\lambda$.
- Two events cannot occur at exactly the same instant.

### Notation
$$X \sim \text{Po}(\lambda)$$
where $\lambda$ = mean number of events per interval.

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

### Mean and Variance

| Quantity | Formula |
|----------|---------|
| Expected value | $E(X) = \mu = \int_{-\infty}^{\infty} x f(x) \, dx$ |
| Expected value of $g(X)$ | $E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) \, dx$ |
| Variance | $\text{Var}(X) = E(X^2) - [E(X)]^2 = \int x^2 f(x) \, dx - \mu^2$ |

### Linear Transformations
- $E(aX + b) = aE(X) + b$
- $\text{Var}(aX + b) = a^2 \text{Var}(X)$

### Sum of Independent Continuous Random Variables
If $X$ and $Y$ are independent:
- $E(aX \pm bY) = aE(X) \pm bE(Y)$
- $\text{Var}(aX \pm bY) = a^2 \text{Var}(X) + b^2 \text{Var}(Y)$

### Example
A continuous random variable has PDF $f(x) = kx^2$ for $0 \leq x \leq 3$. Find $k$, $E(X)$, and $\text{Var}(X)$.

**Solution:**
$$\int_0^3 kx^2 \, dx = k \left[\frac{x^3}{3}\right]_0^3 = k \times \frac{27}{3} = 9k = 1 \Rightarrow k = \frac{1}{9}$$

$$E(X) = \int_0^3 x \cdot \frac{1}{9}x^2 \, dx = \frac{1}{9} \int_0^3 x^3 \, dx = \frac{1}{9} \left[\frac{x^4}{4}\right]_0^3 = \frac{1}{9} \times \frac{81}{4} = \frac{9}{4} = 2.25$$

$$E(X^2) = \int_0^3 x^2 \cdot \frac{1}{9}x^2 \, dx = \frac{1}{9} \int_0^3 x^4 \, dx = \frac{1}{9} \left[\frac{x^5}{5}\right]_0^3 = \frac{1}{9} \times \frac{243}{5} = \frac{27}{5} = 5.4$$

$$\text{Var}(X) = E(X^2) - [E(X)]^2 = 5.4 - (2.25)^2 = 5.4 - 5.0625 = 0.3375$$

---

## S2.3: Exponential Distribution

### Conditions for an Exponential Distribution
The exponential distribution models the **time between events** in a Poisson process.

If events occur at rate $\lambda$ per unit time, the waiting time $T$ between consecutive events follows:
$$T \sim \text{Exp}(\lambda)$$

### Probability Density Function
$$f(t) = \lambda e^{-\lambda t}, \quad t \geq 0$$

### Cumulative Distribution Function
$$F(t) = P(T \leq t) = 1 - e^{-\lambda t}, \quad t \geq 0$$

### Mean and Variance
$$E(T) = \frac{1}{\lambda}, \quad \text{Var}(T) = \frac{1}{\lambda^2}$$

### Memoryless Property
$$P(T > t + s \mid T > s) = P(T > t)$$
The exponential distribution is memoryless — the remaining waiting time does not depend on how long you've already waited.

### Example
The time between arrivals at a service centre follows an exponential distribution with mean 5 minutes. Find the probability that the next customer arrives in less than 3 minutes.

**Solution:**
Mean $= 5 = \frac{1}{\lambda} \Rightarrow \lambda = 0.2$

$$P(T < 3) = 1 - e^{-0.2 \times 3} = 1 - e^{-0.6} \approx 1 - 0.5488 = 0.4512$$

---

## S2.4: Normal Distribution

### Properties
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
For large $n$ (usually $n \geq 30$), the sampling distribution of $\bar{X}$ is approximately normal, regardless of the population distribution:
$$\bar{X} \approx N\left(\mu, \frac{\sigma^2}{n}\right)$$

### Sampling from a Normal Population
If the population is $N(\mu, \sigma^2)$, then:
$$\bar{X} \sim N\left(\mu, \frac{\sigma^2}{n}\right)$$

---

## S2.6: Hypothesis Testing

### Key Concepts

| Term | Definition |
|------|------------|
| **Null hypothesis** $H_0$ | Statement assumed true (e.g., $\mu = \mu_0$) |
| **Alternative hypothesis** $H_1$ | Statement we test against (e.g., $\mu \neq \mu_0$, $\mu > \mu_0$, $\mu < \mu_0$) |
| **Significance level** $\alpha$ | Probability of Type I error (typically 0.05, 0.01) |
| **Test statistic** | Value calculated from sample data |
| **Critical region** | Set of values leading to rejection of $H_0$ |
| **Critical value** | Boundary of the critical region |
| **p-value** | Probability of observing test statistic as extreme as observed, assuming $H_0$ true |
| **Type I error** | Reject $H_0$ when $H_0$ is true |
| **Type II error** | Accept $H_0$ when $H_0$ is false |

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
- Test statistic: $t = \frac{\bar{X} - \mu_0}{s / \sqrt{n}} \sim t_{n-1}$ under $H_0$

### Tests Using Normal Approximation (large samples)
For proportions or Poisson means with large $n$, use $z$-test.

### Example: One-Tailed $z$-Test
A manufacturer claims that light bulbs last 1000 hours on average. A sample of 50 bulbs has mean 980 hours with $\sigma = 80$ hours. Test at $\alpha = 0.05$ whether the true mean is less than 1000.

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