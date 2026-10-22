---
layout: subjects
title: "Sequences and series"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/sequences/
toc_headings: h2, h3
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · P1.5 · OxfordAQA 9660 v5.2

Attempt each task on paper before opening its hint. Use the separate solution to check method, conditions and result. All questions are **self-written**, with no official marks. The paired Chinese page keeps the same English prompts, formulae and numerical answers.

- [L10 Arithmetic terms, Sigma and accumulated totals](#l10)
- [L11 Finite and infinite geometric accumulation](#l11)
- [L12 Recurrence, initial values and candidate limits](#l12)
- [L13 Binomial coefficients and using an expansion](#l13)

## L10 · Arithmetic terms, Sigma and accumulated totals {#l10}

Goal: distinguish a term from a sum and use integer constraints in cumulative models. Prerequisites: L01–L02.

An arithmetic sequence has a constant difference $d$, so $u_n=a+(n-1)d$ for $n=1,2,\ldots$. Pairing the first and last terms gives

$$S_n=\sum_{r=1}^n u_r=\frac n2[2a+(n-1)d].$$

Sigma means adding the indicated terms, not multiplying by the last index. In particular, reversing the order of $1+2+\cdots+n$ and adding gives pairs of value $n+1$, with $n$ such pairs, so

$$\sum_{r=1}^n r=\frac{n(n+1)}2.$$

A general term need not be arithmetic: $u_n=n^2+1$ starts $2,5,10$ with unequal differences. Always check the stated starting index.

### Worked reasoning {#l10-worked}

**Question:** A constructed savings plan deposits 20 dollars in month 1 and increases each deposit by 5 dollars. Find the month-6 deposit and total deposited in six months.

Here $a=20,d=5$. Thus $u_6=20+5(5)=45$ dollars, whereas $S_6=3[40+5(5)]=195$ dollars. Listing $20,25,30,35,40,45$ checks the difference between the two questions.

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

### Diagnose and repair {#l10-diagnosis}

If $a+nd$ was used, test $n=1$: it fails to return the first term. A noninteger root for a budget boundary must be interpreted with the requested inequality, not blindly rounded.

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

## L11 · Finite and infinite geometric accumulation {#l11}

Goal: derive sums and reject candidates that violate convergence. Prerequisites: L02 and L10.

A geometric sequence has $u_n=ar^{n-1}$. Subtracting from $S_n$ the quantity $rS_n$ cancels the middle terms:

$$(1-r)S_n=a-ar^n,\qquad S_n=\frac{a(1-r^n)}{1-r}\quad(r\ne1).$$

When $r=1$, the finite sum is $na$. For a nonzero first term, an infinite sum exists only if $\lvert r\rvert<1$, because then $r^n\to0$, giving $S_\infty=a/(1-r)$. Negative ratios alternate in sign; keep brackets around powers. An algebraic solution using the infinite-sum formula must still satisfy its condition.

### Worked reasoning {#l11-worked}

**Question:** For $18,6,2,\ldots$, find the sum of the first four terms and the sum to infinity.

The ratio is $1/3$. Hence $S_4=18(1-1/81)/(1-1/3)=80/3$. Since $\lvert1/3\rvert<1$, the infinite sum is $18/(1-1/3)=27$. The four-term sum is smaller because the remaining terms are positive.

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

### Diagnose and repair {#l11-diagnosis}

A finite sum does not require convergence. Conversely, a plausible calculator root does not make an infinite sum exist. Explain why a candidate is rejected.

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

## L12 · Recurrence, initial values and candidate limits {#l12}

Goal: generate every step from the given initial value and distinguish a fixed point from convergence. Prerequisites: L02, L10–L11 and substitution.

A recurrence gives the next term from the previous term, not from its index. Label the initial term explicitly. If $x_n\to L$ and $f$ is continuous at $L$, then $x_{n+1}=f(x_n)$ implies $L=f(L)$. This supplies candidates only. Check the actual initial value and the behaviour of the iterates; a few screen values suggest a trend but do not prove a general limit. Formal stability theory is not required here.

### Worked reasoning {#l12-worked}

**Question:** Starting with $x_0=0$, generate four further terms of $x_{n+1}=(x_n+6)/2$ and investigate the limit.

The chain is $x_1=(0+6)/2=3$, $x_2=(3+6)/2=4.5$, $x_3=(4.5+6)/2=5.25$, $x_4=(5.25+6)/2=5.625$. The fixed-point equation gives $L=6$. Here $6-x_{n+1}=(6-x_n)/2$, so the positive gap halves each time and tends to zero. This extra reasoning, not the equation alone, confirms the limit.

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

### Diagnose and repair {#l12-diagnosis}

Do not feed the original initial value back into every step. A fixed point is an unchanged value, whereas a limit describes the behaviour of a specified sequence.

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

## L13 · Binomial coefficients and using an expansion {#l13}

Goal: calculate terms in a positive-integer expansion and use previous work for an approximation. Prerequisites: L01 and powers.

In expanding $(a+b)^n$, among the $n$ brackets choosing $r$ of them to contribute $b$ creates $\binom nr a^{n-r}b^r$. Thus

$$(a+b)^n=\sum_{r=0}^n\binom nr a^{n-r}b^r,\qquad \binom nr=\frac{n!}{r!(n-r)!},\quad0!=1.$$

Here $n$ is a positive integer. The complete expansion is a finite exact identity; omitting terms creates an approximation. A command such as “hence” requires using the earlier expansion, including the substitution and any scale factor. Direct powering alone does not show that connection. This is not the later rational-power infinite expansion.

### Worked reasoning {#l13-worked}

**Question:** Expand $(1+2x)^4$. Hence estimate $(1.02)^4$ using terms up to $x^2$, and state the omitted contribution.

The expansion is $1+8x+24x^2+32x^3+16x^4$. Substituting $x=0.01$ into the first three terms gives $1.0824$. The omitted contribution is $32(0.01)^3+16(0.01)^4=0.00003216$, so the estimate is low and the full value is $1.08243216$. This error is established from the complete finite expansion.

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

### Diagnose and repair {#l13-diagnosis}

If a coefficient is missing a power, write the general selected term before simplifying. Use an approximation sign when truncating; the sign of the first omitted term alone is not an unexplained universal error guarantee.

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

## Sources and scope {#sources}

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.1 P1.5; MA01 January 2025 Q3 (MS pp8–9), Q6 (pp14–15) and Q9 (pp21–23).

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.
