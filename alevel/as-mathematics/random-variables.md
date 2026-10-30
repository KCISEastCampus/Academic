---
layout: subjects
title: "Discrete random variables"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/random-variables/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · S1.2 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [Values, probabilities and averages](#l19)
- [Add new outcomes or repeat one?](#l20)

## Values, probabilities and averages {#l19}

Goal: build a distribution and choose rules for transformed values. Prerequisites: [probabilities](../probability/#l18).

### Average the possible values using their chances {#l19-concept}

A random variable assigns a number to each possible outcome. Its distribution lists the possible values and their probabilities. Probabilities must be nonnegative and add to 1.

The mean is a weighted average: a more probable value contributes more. It need not itself be a possible outcome. Variance measures squared distance from the mean; standard deviation takes the square root to return to the original units. We write $E(X)$ for the mean, $p(x)$ for the probability of $X=x$, and $g(x)$ for a new value made from x, such as its square. A convenient way to calculate is

$$\begin{aligned}
E(X)&=\sum_x xp(x),\\
E(g(X))&=\sum_x g(x)p(x),\\
\operatorname{Var}(X)&=E(X^2)-[E(X)]^2.
\end{aligned}$$

For a transformed value, list what each original value becomes and keep its probability. Combine probabilities if different outcomes give the same new value. For $Y=aX+b$, the shortcuts are $E(Y)=aE(X)+b$, $\operatorname{Var}(Y)=a^2\operatorname{Var}(X)$ and $\operatorname{SD}(Y)=\lvert a\rvert\operatorname{SD}(X)$. Adding the same amount moves every value equally, so spread is unchanged; multiplying scales all deviations.

These shortcuts are for a linear expression. Squaring or taking a reciprocal needs the transformed values and their moments; a reciprocal is undefined if zero is a possible original value. Do not replace the mean of squares with the square of the mean.

<div class="worked-example" markdown="1">

### A complete example {#l19-worked}

**Question:** Let $X$ take values $1,2,4$ with probabilities $k,2k,k$. Find $k$, its mean, variance and standard deviation.

The probabilities must add to 1: $k+2k+k=1$, so $k=1/4$. To find a weighted mean, multiply each value by its chance, then add. For the second moment, square the values first:

$$\begin{aligned}
E(X)&=1\left(\frac14\right)+2\left(\frac12\right)+4\left(\frac14\right)=\frac94,\\
E(X^2)&=1^2\left(\frac14\right)+2^2\left(\frac12\right)+4^2\left(\frac14\right)=\frac{25}4.
\end{aligned}$$

Variance subtracts the square of the mean, not the mean itself:

$$\begin{aligned}
\operatorname{Var}(X)&=\frac{25}4-\left(\frac94\right)^2=\frac{19}{16},\\
\operatorname{SD}(X)&=\frac{\sqrt{19}}4.
\end{aligned}$$

The mean is between the smallest and largest possible values. The variance is nonnegative, as a measure of squared deviations must be.

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### Another independent task {#l19-independent-distribution}

**Question:** Two fair coins are tossed independently. Let X be the number of heads, and let $Y=5-3X$. Build the distribution of X from the equally likely outcomes. Find the mean, variance and standard deviation of Y.

<details markdown="1">
<summary>Hint</summary>

List HH, HT, TH and TT, then group outcomes by the value of X.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The four outcomes each have probability $1/4$. Thus X has values $0,1,2$ with probabilities $1/4,1/2,1/4$. These probabilities sum to 1.

$$E(X)=0+\frac12+\frac24=1,\qquad E(X^2)=\frac12+\frac44=\frac32.$$

So $\operatorname{Var}(X)=3/2-1=1/2$. For the linear transformation,

$$E(Y)=5-3(1)=2,\quad \operatorname{Var}(Y)=9\left(\frac12\right)=\frac92,\quad \operatorname{SD}(Y)=\frac3{\sqrt2}.$$

You can check by listing Y as $5,2,-1$ with the same probabilities.

</details>

</div>

### Diagnose and repair {#l19-diagnosis}

A sample standard-deviation formula with an n−1 denominator does not describe a known probability distribution. Compute the weighted second moment before subtracting the squared mean; a negative variance signals an error.

For distribution or linear-rule errors, return to [values and probabilities](#l19-concept), then [build a new distribution](#l19-retry-distribution). For a nonlinear transform, compare [the squared-value task](#l19-independent), then [try reciprocals](#l19-retry).

<div class="lesson-check" markdown="1">

### Try again {#l19-retry}

**Question:** For the same X, find the mean and variance of $Z=1/X$, explaining why the definition is valid.

Here “the same X” refers to [the original complete example](#l19-worked): $X=1,2,4$ with probabilities $1/4,1/2,1/4$, respectively. Use this distribution, not the coin count in the later task.

<details markdown="1">
<summary>Hint</summary>

Zero is absent. Calculate both reciprocal and squared-reciprocal values.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The definition is valid since $X\ne0$. $E(Z)=9/16$ and $E(Z^2)=25/64$, so $\operatorname{Var}(Z)=25/64-81/256=19/256$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Build a new distribution {#l19-retry-distribution}

**Question:** A fair six-sided die is rolled. X is 1 for a score of 1 or 2, and is 4 otherwise. Build its distribution and find the mean, variance and standard deviation of $Y=2X+1$.

<details markdown="1">
<summary>Hint</summary>

Count how many equally likely scores give each value of X.

</details>

<details markdown="1">
<summary>Solution and check</summary>

X takes 1 with probability $2/6=1/3$ and 4 with probability $4/6=2/3$. Then $E(X)=1/3+8/3=3$ and $E(X^2)=1/3+32/3=11$, so $\operatorname{Var}(X)=11-9=2$. Hence $E(Y)=7$, $\operatorname{Var}(Y)=8$ and $\operatorname{SD}(Y)=2\sqrt2$. Directly, Y has values 3 and 9 with the same probabilities.

</details>

</div>

## Add new outcomes or repeat one? {#l20}

Goal: distinguish new independent outcomes from repeating one outcome. Prerequisites: [independence](../probability/#l18) and [variance](#l19).

### Two new scores or the same score twice? {#l20-concept}

Throwing a die twice produces two outcomes. Throwing once and doubling that score repeats the same outcome. Both can have the same mean, but their variability need not match.

Means combine linearly even without independence. For independent variables with finite variances,

$$E(aX+bY)=aE(X)+bE(Y),\qquad \operatorname{Var}(aX+bY)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y).$$

For variance, each multiplier is squared. That is why the contributions add even in a difference: a negative sign does not produce negative spread. For more independent variables, add their contributions in the same way.

$2X$ doubles one deviation; $X_1+X_2$ adds two independent deviations. Name the random objects before choosing the rule. Different letters alone do not establish independence. If dependence is not specified, separate variances alone do not determine the variance of their sum.

<div class="worked-example" markdown="1">

### A complete example {#l20-worked}

**Question:** Independent daily counts $X_1,X_2$ each have mean 8 and variance 3. Compare the mean and variance of $X_1+X_2$ with those of $2X_1$.

Both means are $16$. For independent days $\operatorname{Var}(X_1+X_2)=3+3=6$. Repeating one score gives $\operatorname{Var}(2X_1)=4(3)=12$. Equal means do not imply equal spread; the second construction amplifies the same random deviation twice.

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

### Diagnose and repair {#l20-diagnosis}

A subtraction in the random score is not subtraction of variances. Independence is a property of random outcomes, not a consequence of giving variables different letters.

Compare [new outcomes and a repeated outcome](#l20-worked), then [the three-copy retry](#l20-retry).

<div class="lesson-check" markdown="1">

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

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Probability](/alevel/as-mathematics/probability/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Binomial distributions](/alevel/as-mathematics/binomial/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-statistics). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-statistics) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 S1.2; MA02 January 2025 Q6(c), Q8, MS pp13,15.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>

{% include exam_topic_practice.html %}
