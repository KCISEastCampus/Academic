---
layout: subjects
title: "Sequences and series"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/sequences/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · P1.5 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [One term or a total?](#l10)
- [Repeated multiplication and sums](#l11)
- [Build a sequence one step at a time](#l12)
- [Expand a power and estimate a value](#l13)

## One term or a total? {#l10}

Goal: distinguish one term from a total and use whole-number counts. Prerequisites: [linear equations](/alevel/as-mathematics/algebra/#l02).

### One payment or all the payments? {#l10-concept}

A sequence is an ordered list. An arithmetic sequence adds the same amount each time. If the first term is $a$ and the difference is $d$, reaching term $n$ takes $n-1$ steps, so $u_n=a+(n-1)d$ for $n=1,2,\ldots$.

A series adds terms. Pair first with last, second with second-last: every pair has the same total. This gives

$$S_n=\sum_{r=1}^n u_r=\frac n2[2a+(n-1)d].$$

The symbol $\sum$ means add the terms obtained as the index runs through the stated integers. It does not mean multiply by the final index. Pairing the list of integers forwards and backwards gives $n$ pairs each equal to $n+1$, so

$$\sum_{r=1}^n r=\frac{n(n+1)}2.$$

Before selecting a formula ask whether you need a particular term or a total. Not every list has a constant difference: $u_n=n^2+1$ begins $2,5,10$. In a monthly model, the number of payments must be a whole number; check the totals on either side of a threshold.

<div class="worked-example" markdown="1">

### A complete example {#l10-worked}

**Question:** A constructed savings plan deposits 20 dollars in month 1 and increases each deposit by 5 dollars. Find the month-6 deposit and total deposited in six months.

Here $a=20,d=5$. Thus $u_6=20+5(5)=45$ dollars, whereas $S_6=3[40+5(5)]=195$ dollars. Listing $20,25,30,35,40,45$ checks the difference between the two questions.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l10-scaffold}

**Question:** Evaluate $\sum_{r=1}^{10}(3r+2)$ using the natural-number sum.

<details markdown="1">
<summary>Hint</summary>

Separate the sum of the multiples from the ten constant terms.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$3\times55+2\times10=185$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l10-independent}

**Question:** An arithmetic savings plan has $S_5=100$ and $S_{10}=325$ dollars. Find its first deposit and common difference. Find the first month at which its total reaches at least 200 dollars.

<details markdown="1">
<summary>Hint</summary>

Form two equations for the first term and difference; then compare neighbouring integer totals.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$5a+10d=100$ and $10a+45d=325$ give $d=5,a=10$. Now $S_n=(5n^2+15n)/2$. Since $S_7=175$ and $S_8=220$, and all deposits are positive, month 8 is the first reaching the target.

</details>

</div>

### Diagnose and repair {#l10-diagnosis}

If $a+nd$ was used, test $n=1$: it fails to return the first term. A noninteger root for a budget boundary must be interpreted with the requested inequality, not blindly rounded.

For term counting, compare [one term with the total](#l10-worked), then [count a new sum](#l10-retry). For the first month reaching a target, revisit [the neighbouring-month check](#l10-independent), then [try a new target](#l10-retry-threshold).

<div class="lesson-check" markdown="1">

### Try again {#l10-retry}

**Question:** Find $\sum_{r=4}^{10}(2r-1)$ and state the number of terms.

<details markdown="1">
<summary>Hint</summary>

Subtract the first three terms from the first ten, or count endpoints inclusively.

</details>

<details markdown="1">
<summary>Solution and check</summary>

There are $7$ terms, from $7$ to $19$, so the sum is $7(7+19)/2=91$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another retry {#l10-retry-threshold}

**Question:** A constructed savings plan deposits 12 dollars in month 1, then increases each monthly deposit by 4 dollars. Find the first month when the total deposited is at least 250 dollars. Justify the whole-number choice.

<details markdown="1">
<summary>Hint</summary>

Form the total, then check the months on either side of the boundary.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The total is $S_n=\frac n2[24+4(n-1)]=2n^2+10n$. The positive boundary of $S_n=250$ is $n=(-5+\sqrt{525})/2\approx8.96$.

We need at least the target, so test the next integer, not the nearest one: $S_8=208<250$ and $S_9=252\ge250$. All deposits are positive, so the totals increase. Month 9 is the first that works.

</details>

</div>

## Repeated multiplication and sums {#l11}

Goal: explain geometric sums and check when an infinite sum exists. Prerequisites: [quadratics](/alevel/as-mathematics/algebra/#l02) and [terms and sums](#l10).

### Multiply by the same number each time {#l11-concept}

An arithmetic list adds the same amount; a geometric list multiplies by the same ratio. Its $n$th term is $u_n=ar^{n-1}$. To add the terms, write the sum again multiplied by $r$. The middle terms match and cancel on subtraction:

$$\begin{aligned}
S_n&=a+ar+\cdots+ar^{n-1},\\
rS_n&=ar+ar^2+\cdots+ar^n,\\
(1-r)S_n&=a-ar^n,\\
S_n&=\frac{a(1-r^n)}{1-r}\quad(r\ne1).
\end{aligned}$$

If $r=1$, every term equals $a$ and the finite total is $na$; do not divide by zero. A negative ratio changes the sign at each step, so keep brackets when raising it to powers.

An infinite sum means the running totals approach one finite number. For a nonzero first term this happens exactly when $\lvert r\rvert<1$: then $r^n\to0$ and $S_\infty=a/(1-r)$. Solve an equation for the ratio if needed, but check this condition afterwards. A finite sum does not require it.

<div class="worked-example" markdown="1">

### A complete example {#l11-worked}

**Question:** For $18,6,2,\ldots$, find the sum of the first four terms and the sum to infinity.

The ratio is $1/3$. Hence $S_4=18(1-1/81)/(1-1/3)=80/3$. Since $\lvert1/3\rvert<1$, the infinite sum is $18/(1-1/3)=27$. The four-term sum is smaller because the remaining terms are positive.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l11-scaffold}

**Question:** List four terms for $a=12,r=-1/2$ and evaluate their sum.

<details markdown="1">
<summary>Hint</summary>

Alternate the signs and preserve powers of the negative ratio.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The terms are $12,-6,3,-3/2$, so $S_4=15/2$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l11-independent}

**Question:** A nonzero geometric series has second term $-6$ and sum to infinity $8$. Find its first term and ratio, justifying rejection of any other candidate. Express the sum of its first $2k$ terms.

<details markdown="1">
<summary>Hint</summary>

Use the two given quantities to eliminate the first term.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$ar=-6$ and $a=8(1-r)$ give $4r^2-4r-3=0$. Candidates are $r=3/2,-1/2$. Reject $3/2$ because its magnitude exceeds 1; then $a=12$. The required even partial sum is $8(1-4^{-k})$, since $(-1/2)^{2k}=4^{-k}$.

</details>

</div>

### Diagnose and repair {#l11-diagnosis}

A finite sum does not require convergence. Conversely, a plausible calculator root does not make an infinite sum exist. Explain why a candidate is rejected.

Return to [the finite cancellation and limit condition](#l11-concept), then test [the changed ratio](#l11-retry).

<div class="lesson-check" markdown="1">

### Try again {#l11-retry}

**Question:** Find the sum of five terms with $a=7,r=1$. Does the corresponding infinite series converge?

<details markdown="1">
<summary>Hint</summary>

Handle the constant sequence without division by zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$S_5=35$. The partial sums are $7n$ and grow without bound, so there is no finite infinite sum.

</details>

</div>

## Build a sequence one step at a time {#l12}

Goal: generate a recurrence from its actual start and check candidate limits. Prerequisites: [substitution](/alevel/as-mathematics/algebra/#l02) and [geometric change](#l11).

### Feed the new answer into the next step {#l12-concept}

A recurrence tells us how to obtain the next term from the current one. Start with the given value, calculate one new value, then use that new value for the following step. Keep its index: a start labelled zero is not term one.

A fixed point stays unchanged by the rule. If a sequence approaches a finite number $L$ and its rule $f$ is continuous there, then $x_{n+1}=f(x_n)$ gives the candidate equation $L=f(L)$. It asks what an eventual unchanged value could be; it does not prove the given start will approach it.

Compare the actual terms, then explain a mechanism such as a gap shrinking by a fixed factor. A few calculator values can suggest a limit but cannot prove it for all later terms. The example below uses halving a gap; formal stability theory is not needed.

<div class="worked-example" markdown="1">

### A complete example {#l12-worked}

**Question:** Starting with $x_0=0$, generate four further terms of $x_{n+1}=(x_n+6)/2$ and investigate the limit.

The chain is $x_1=(0+6)/2=3$, $x_2=(3+6)/2=4.5$, $x_3=(4.5+6)/2=5.25$, $x_4=(5.25+6)/2=5.625$. The fixed-point equation gives $L=6$. Here $6-x_{n+1}=(6-x_n)/2$, so the positive gap halves each time and tends to zero. This extra reasoning, not the equation alone, confirms the limit.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l12-scaffold}

**Question:** For $u_1=2$ and $u_{n+1}=3u_n-1$, find $u_2,u_3,u_4$.

<details markdown="1">
<summary>Hint</summary>

The initial index is 1, not 0.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$u_2=5$, $u_3=14$, $u_4=41$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l12-independent}

**Question:** For $x_{n+1}=x_n^2$, find the candidate finite limits. Compare the first three new terms from $x_0=1/2$ and from $x_0=2$. Explain why solving the fixed-point equation alone is insufficient.

<details markdown="1">
<summary>Hint</summary>

Compare powers for a number between 0 and 1 and for a number greater than 1.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$L=L^2$ gives $L=0,1$. From $1/2$ the terms are $1/4,1/16,1/256$; indeed $x_n=(1/2)^{2^n}\to0$. From 2 they are $4,16,256$ and $x_n=2^{2^n}$ is unbounded. The candidate 1 is attained as a fixed sequence only if the start is 1 (or after a suitable preceding value), not forced by the recurrence for every start.

</details>

</div>

### Diagnose and repair {#l12-diagnosis}

Do not feed the original initial value back into every step. A fixed point is an unchanged value, whereas a limit describes the behaviour of a specified sequence.

Compare [the actual iteration and shrinking gap](#l12-worked), then test [the new recurrence](#l12-retry).

<div class="lesson-check" markdown="1">

### Try again {#l12-retry}

**Question:** Starting with $x_0=2$, consider $x_{n+1}=-x_n$. Find the first four new terms and decide whether a limit exists.

<details markdown="1">
<summary>Hint</summary>

Compare odd- and even-indexed terms.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The terms are $-2,2,-2,2$. They alternate without approaching one value, so no limit exists, even though $L=-L$ has the candidate $0$.

</details>

</div>

## Expand a power and estimate a value {#l13}

Goal: find coefficients and use an expansion to justify an approximation. Prerequisites: [powers](/alevel/as-mathematics/algebra/#l01-indices) and multiplying brackets.

### Count the choices made when multiplying brackets {#l13-concept}

In $(a+b)^n$ there are $n$ brackets. To make a term with $r$ copies of $b$, choose $r$ brackets to supply $b$ and take $a$ from the rest. Different choices can produce the same term. The number of choices is the binomial coefficient:

$$(a+b)^n=\sum_{r=0}^n\binom nr a^{n-r}b^r,\qquad \binom nr=\frac{n!}{r!(n-r)!},\quad0!=1.$$

Factorial means multiply the positive integers down to 1. Here $n$ is a positive integer, so the complete expansion has finitely many terms and is exact.

Keeping only the first few terms gives an approximation. First choose the input that makes the bracket equal the number asked for, then use those terms. “Hence” asks you to show this link with earlier work, including any scale factor. The full finite expansion lets you examine the omitted terms; do not call a truncation exact or import the later infinite-series rule.

<div class="worked-example" markdown="1">

### A complete example {#l13-worked}

**Question:** Expand $(1+2x)^4$. Hence estimate $(1.02)^4$ using terms up to $x^2$, and state the omitted contribution.

For a fourth power the binomial coefficients are $1,4,6,4,1$. Here the second term in the bracket is $2x$, so its powers must be included too:

$$\begin{aligned}
(1+2x)^4&=1+4(2x)+6(2x)^2+4(2x)^3+(2x)^4\\
&=1+8x+24x^2+32x^3+16x^4.
\end{aligned}$$

To use this for $1.02^4$, make the bracket match: $1+2x=1.02$ gives $x=0.01$, not 0.02. Keeping terms through the square gives

$$1.02^4\approx1+8(0.01)+24(0.01)^2=1.0824.$$

The terms we left out total $32(0.01)^3+16(0.01)^4=0.00003216$. They are positive, so the estimate is low. Adding them back gives the full value $1.08243216$. This error comes from the complete finite expansion, not just from saying x is small.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l13-scaffold}

**Question:** Find the coefficient of $x^2$ in $(2-3x)^4$.

<details markdown="1">
<summary>Hint</summary>

Include both the remaining power of 2 and the squared coefficient −3.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\binom42 2^2(-3)^2=216$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l13-independent}

**Question:** In $(1+kx)^5$, the coefficient of $x^2$ is 90 and $k<0$. Find $k$ and the coefficient of $x^3$. Use the first three terms to estimate $0.97^5$, showing the substitution.

<details markdown="1">
<summary>Hint</summary>

The sign condition selects a root. Relate 0.97 to the resulting bracket.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$10k^2=90$ gives $k=-3$. The cubic coefficient is $10(-3)^3=-270$. With $x=0.01$, the first three terms $1-15x+90x^2$ give $0.859$. This is a truncated estimate, not an exact equality to $0.97^5$.

</details>

</div>

### Diagnose and repair {#l13-diagnosis}

If a coefficient is missing a power, write the general selected term before simplifying. Use an approximation sign when truncating; the sign of the first omitted term alone is not an unexplained universal error guarantee.

For coefficient errors, return to [the expansion](#l13-concept) and [coefficient retry](#l13-retry). For a wrong substitution or error direction, use [the complete approximation](#l13-worked), then [the new approximation](#l13-retry-approximation).

<div class="lesson-check" markdown="1">

### Try again {#l13-retry}

**Question:** Find the coefficient of $x^3$ in $(2+x)^5$ and explain the combinatorial factor.

<details markdown="1">
<summary>Hint</summary>

Choose which three brackets contribute x.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\binom53 2^2=40$; the factor $10$ counts the choices of three brackets among five.

</details>

</div>

<div class="lesson-check" markdown="1">

### Use the expansion again {#l13-retry-approximation}

**Question:** Write the terms through $x^3$ in $(1-2x)^4$. Use them to estimate $0.98^4$ and decide whether your estimate is high or low.

<details markdown="1">
<summary>Hint</summary>

Choose x so that the bracket is 0.98, then examine the omitted term.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The first four terms are $1-8x+24x^2-32x^3$. Since $1-2x=0.98$, use $x=0.01$:

$$0.98^4\approx1-0.08+0.0024-0.000032=0.922368.$$

The only omitted term is $16x^4=0.00000016>0$, so the estimate is low. The exact finite expansion would give $0.92236816$.

</details>

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Integration and approximation](/alevel/as-mathematics/integration/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Circles](/alevel/as-mathematics/circles/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-foundations). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-foundations) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.1 P1.5; MA01 January 2025 Q3 (MS pp8–9), Q6 (pp14–15) and Q9 (pp21–23).

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>
