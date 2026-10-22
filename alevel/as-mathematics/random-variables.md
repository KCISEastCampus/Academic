---
layout: subjects
title: "Discrete random variables"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/random-variables/
toc_headings: h2, h3
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · S1.2 · OxfordAQA 9660 v5.2

Attempt each task on paper before opening its hint. Use the separate solution to check method, conditions and result. All questions are **self-written**, with no official marks. The paired Chinese page keeps the same English prompts, formulae and numerical answers.

- [L19 One variable: distribution, moments and transformations](#l19)
- [L20 Independent sums, differences and repeated scores](#l20)

## L19 · One variable: distribution, moments and transformations {#l19}

Goal: construct a finite distribution and distinguish linear from nonlinear transformations. Prerequisites: L01 and L18.

A random variable assigns a numerical value to each outcome. A finite distribution needs nonnegative probabilities summing to 1. Its mean is a probability-weighted centre, not necessarily an attainable value. Its variance measures squared spread, while standard deviation is in the original units:

$$E(X)=\sum_x xp(x),\quad E(g(X))=\sum_x g(x)p(x),\quad \operatorname{Var}(X)=E(X^2)-[E(X)]^2.$$

For $Y=aX+b$, $E(Y)=aE(X)+b$, $\operatorname{Var}(Y)=a^2\operatorname{Var}(X)$ and $\operatorname{SD}(Y)=\lvert a\rvert\operatorname{SD}(X)$. Translation changes the centre but not spread. For a nonlinear function, calculate its values and both required moments directly; negative powers require that zero is absent from the support. If transformed values coincide, combine their probabilities.

### Worked reasoning {#l19-worked}

**Question:** Let $X$ take values $1,2,4$ with probabilities $k,2k,k$. Find $k$, its mean, variance and standard deviation.

$4k=1$ gives $k=1/4$. The moments are $E(X)=(1+4+4)/4=9/4$ and $E(X^2)=(1+8+16)/4=25/4$. Therefore variance is $25/4-81/16=19/16$ and SD is $\sqrt{19}/4$. The mean lies between 1 and 4, and variance is positive.

### Complete a supported attempt {#l19-scaffold}

**Question:** For this distribution, find the mean, variance and SD of $Y=3-2X$.

<details markdown="1">
<summary>Hint</summary>

A negative multiplier reverses values but cannot make a variance or SD negative.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$E(Y)=-3/2$, $\operatorname{Var}(Y)=19/4$, $\operatorname{SD}(Y)=\sqrt{19}/2$.

</details>

### Independent task {#l19-independent}

**Question:** A constructed payment in dollars is $C=X^2$, using the distribution above. Find its expected value, variance and standard deviation, and explain why squaring the mean of X is insufficient.

<details markdown="1">
<summary>Hint</summary>

List the values of C, and compute the mean of its square as a separate column.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The payment values are $1,4,16$ with probabilities $1/4,1/2,1/4$. Thus $E(C)=25/4$ dollars and $E(C^2)=289/4$. Variance is $289/4-(25/4)^2=531/16$ in squared dollars, and SD is $\sqrt{531}/4$ dollars. Squaring $E(X)$ gives $81/16$, which is not $E(X^2)$.

</details>

### Diagnose and repair {#l19-diagnosis}

A sample standard-deviation formula with an n−1 denominator does not describe a known probability distribution. Compute the weighted second moment before subtracting the squared mean; a negative variance signals an error.

### Try again {#l19-retry}

**Question:** For the same X, find the mean and variance of $Z=1/X$, explaining why the definition is valid.

<details markdown="1">
<summary>Hint</summary>

Zero is absent. Calculate both reciprocal and squared-reciprocal values.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The definition is valid since $X\ne0$. $E(Z)=9/16$ and $E(Z^2)=25/64$, so $\operatorname{Var}(Z)=25/64-81/256=19/256$.

</details>

## L20 · Independent sums, differences and repeated scores {#l20}

Goal: identify the random objects before adding their means or variances. Prerequisites: L18–L19.

Expectation is linear without an independence assumption. For independent variables with finite variances:

$$E(aX+bY)=aE(X)+bE(Y),\qquad \operatorname{Var}(aX+bY)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y).$$

The variance contributions still add in a difference, because the coefficients are squared. For multiple independent variables, add all their variance contributions in the same way. Repeating one realised score is different from conducting new independent trials: $2X$ uses the same outcome twice, whereas $X_1+X_2$ uses two independent outcomes. If dependence is unspecified, the marginal variances alone do not determine the variance of a sum.

### Worked reasoning {#l20-worked}

**Question:** Independent daily counts $X_1,X_2$ each have mean 8 and variance 3. Compare the mean and variance of $X_1+X_2$ with those of $2X_1$.

Both means are $16$. For independent days $\operatorname{Var}(X_1+X_2)=3+3=6$. Repeating one score gives $\operatorname{Var}(2X_1)=4(3)=12$. Equal means do not imply equal spread; the second construction amplifies the same random deviation twice.

### Complete a supported attempt {#l20-scaffold}

**Question:** Independent X and Y have means 5 and 2, variances 4 and 1. Find the mean and variance of $X-Y$.

<details markdown="1">
<summary>Hint</summary>

Subtract means but square the negative coefficient for variance.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$E(X-Y)=3$ and $\operatorname{Var}(X-Y)=4+1=5$.

</details>

### Independent task {#l20-independent}

**Question:** Independent X, Y and Z have means 5, 2, 7 and variances 4, 1, 9 respectively. Find the mean and variance of $W=2X-Y+Z$. If independence is removed, which of your answers is still determined?

<details markdown="1">
<summary>Hint</summary>

Apply each coefficient to its own variable, and separate the two rules’ assumptions.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$E(W)=10-2+7=15$ and $\operatorname{Var}(W)=4(4)+1+9=26$. Without independence the mean is still 15; the variance is not determined by the information given.

</details>

### Diagnose and repair {#l20-diagnosis}

A subtraction in the random score is not subtraction of variances. Independence is a property of random outcomes, not a consequence of giving variables different letters.

### Try again {#l20-retry}

**Question:** Three independent copies of X each have variance 2. Compare the variance of their sum with the variance of $3X$.

<details markdown="1">
<summary>Hint</summary>

Distinguish three independent deviations from one deviation multiplied by three.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The sum has variance $2+2+2=6$; $3X$ has variance $3^2(2)=18$.

</details>

## Sources and scope {#sources}

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 S1.2; MA02 January 2025 Q6(c), Q8, MS pp13,15.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.
