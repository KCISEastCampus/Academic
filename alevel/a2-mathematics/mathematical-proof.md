---
title: Mathematical Proof
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/mathematical-proof/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · Mathematical arguments for MA03

Explain why a statement is true, or give a counter-example to show that it is false.

- **Learning:** start with [statements and symbols](#statements-and-symbols), then compare the three methods.
- **Homework help:** state the assumptions, justify each step and finish with the statement you have proved.
- **Revision:** try [practice](#practice) before opening the solutions.

Scope: [OxfordAQA 9660 specification v5.2, Unit P2 introduction, printed p19](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). This page develops mathematical language, proof and disproof across the unit; the supplied textbook has no separate proof chapter.
{: .lesson-meta}

<div class="lesson-notes" markdown="1">

**Starting point:** expand and factorise, represent even integers as $2k$ and odd integers as $2k+1$ ($k\in\mathbb Z$), and write a rational number as a fraction $p/q$ in lowest terms with $q\ne0$. Recover [algebra](/alevel/as-mathematics/algebra/#l01). Rational numbers remain rational under addition, subtraction, multiplication and division by a non-zero rational: for example $p/q-r/s=(ps-rq)/(qs)$ with $q,s\ne0$. If unsure, check the denominators before starting contradiction. Your goal is to state the domain, justify steps and independently choose a proof or valid counter-example; a few successful numerical tests are insufficient. All tasks are self-written teaching exercises, with no official marks.

</div>

## Statements and Symbols {#statements-and-symbols}

Numerical examples here use real numbers unless an integer domain is stated. A statement must say which values it covers. For example, “$n^2$ is even” is not true for every integer $n$.

| Language or symbol | Meaning | Example |
|---|---|---|
| $=$, equals | The two values are equal | $x^2=4$ holds when $x=2$ or $x=-2$ |
| $\equiv$, identically equals | Both expressions agree for every allowed value | $(x+1)^2\equiv x^2+2x+1$ |
| $P\Rightarrow Q$, implies | Whenever $P$ is true, $Q$ is true | $x=2\Rightarrow x^2=4$ |
| $P\Leftarrow Q$, is implied by | Whenever $Q$ is true, $P$ is true | $x^2=4\Leftarrow x=2$ |
| $P\Leftrightarrow Q$, if and only if | Both directions hold | $x^2=4\Leftrightarrow x=2\text{ or }x=-2$ |
{: .wide-table}

In $P\Rightarrow Q$, $P$ is **sufficient** for $Q$, and $Q$ is **necessary** for $P$. For example, $x=2$ is sufficient for $x^2=4$. It is not necessary, since $x=-2$ also works. The condition $x^2=4$ is necessary for $x=2$, but is not sufficient.

Use words such as **because**, **therefore** and **hence** to explain how one step follows from another. The symbol $\therefore$ means “therefore”.

### Read the scope before choosing an argument {#choose-an-argument}

A claim about **every** allowed value needs an argument covering all of them; an existence claim needs just one valid example. The negation of “every allowed value satisfies $P$” is “at least one allowed value does not satisfy $P$”, not “every value fails $P$”. For “if $P$, then $Q$”, contradiction keeps assumption $P$ and supposes conclusion $Q$ fails. A counter-example likewise must satisfy $P$ and fail $Q$.

Read the domain and assumptions, then consider whether the claim holds or has a failing case. Use direct algebra or exhaustive cases when they lead to the conclusion; use contradiction when assuming the opposite conflicts with a known fact. Trials can find a counter-example or suggest a conjecture; failure to find a counter-example is not a proof. Follow a specified proof method when required; a “hence” task should actually use the preceding result.

<section class="lesson-check" markdown="1">

### Two arguments {#check-language}

(a) Insert $\Rightarrow$, $\Leftarrow$ or $\Leftrightarrow$ between $x=3$ and $x^2=9$ over $\mathbb R$. State which condition is sufficient and which is necessary for the other. (b) A student solves $x^2=2x$ by dividing by $x$ and concludes $x=2$. Evaluate and repair the argument.

<details markdown="1">
<summary>Hint</summary>

Test both directions separately and check the divisor before dividing.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$x=3\Rightarrow x^2=9,\qquad x^2=9\not\Rightarrow x=3\quad(x=-3).$$

Thus $x=3$ is sufficient but not necessary for $x^2=9$; $x^2=9$ is necessary but not sufficient for $x=3$.

$$x^2=2x\Leftrightarrow x(x-2)=0\Leftrightarrow x=0\text{ or }x=2.$$

Division by x requires x to be non-zero; the original equation has no such restriction, so the proposed argument loses x=0.

</details>

</section>

## Direct Proof {#direct-proof}

Start with the given assumptions and use valid steps to reach the conclusion. Use algebra to cover every allowed value, rather than checking a few examples.

<section class="worked-example" markdown="1">

### Example 1 — The square of an odd integer {#example-1--the-square-of-an-odd-integer}

**Question:** Prove that the square of every odd integer is odd.

Let $n=2k+1$, where $k$ is an integer. Then

$$n^2=(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1.$$

Since $2k^2+2k$ is an integer, this has the form $2m+1$ for an integer $m$. Therefore $n^2$ is odd.

**Check the argument:** it covers every odd integer, including negative ones. Calculating $3^2=9$ alone would not prove the statement.

</section>

## Proof by Contradiction {#proof-by-contradiction}

Assume the opposite of the statement you want to prove. Show that this assumption leads to a **contradiction**: two facts which cannot both be true. State why the original statement must therefore be true.

<section class="worked-example" markdown="1">

### Example 2 — An irrational square root {#example-2--an-irrational-square-root}

**Question:** Prove that $\sqrt3$ is irrational.

Assume that $\sqrt3$ is rational. Then

$$\sqrt3=\frac pq,$$

where $p$ and $q$ are integers with no common factor greater than $1$, and $q\ne0$. Squaring gives $p^2=3q^2$, so $p^2$ is divisible by $3$.

Justify why divisibility of the square forces divisibility of the integer. Every integer is of the form $3k$, $3k+1$ or $3k-1$. In the last two cases,

$$(3k\pm1)^2=3(3k^2\pm2k)+1,$$

so the remainder is $1$. Since $p^2$ is divisible by $3$, $p$ must be in the $3k$ case.

Write $p=3r$. Then $9r^2=3q^2$, so $q^2=3r^2$. The same argument shows that $q$ is divisible by $3$.

Thus $p$ and $q$ have a common factor $3$, contradicting our choice of a fraction in lowest terms. Therefore $\sqrt3$ is irrational.

**Common mistake:** ending with “$p$ and $q$ are divisible by $3$” without explaining the contradiction.

</section>

## Disproof by Counter-example {#disproof-by-counter-example}

A **counter-example** is one allowed value for which a statement fails. One counter-example disproves a statement about **all** allowed values.

<section class="worked-example" markdown="1">

### Example 3 — A positive product {#example-3--a-positive-product}

**Question:** Disprove: “For all real $a$ and $b$, if $ab>0$, then $a>0$ and $b>0$.”

Take $a=-2$ and $b=-3$. Then $ab=6>0$, but both numbers are negative. These allowed values make the assumption true and the conclusion false, so they disprove the statement.

**Common mistake:** using a value outside the stated domain, or one that does not satisfy the assumption. Positive values which work do not prove the statement for all real values.

</section>

## Practice {#practice}

Allow about **15–20 minutes**. Explain each step; do not give only numerical checks.

<section class="lesson-check" markdown="1">

### Q1 {#question-1--consecutive-integers}

Prove directly that the sum of two consecutive integers is odd.

<details markdown="1">
<summary>Hint</summary>

Write the integers as $n$ and $n+1$, where $n$ is an integer.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Their sum is $n+(n+1)=2n+1$. This is odd for every integer $n$.

The argument includes negative integers and zero; no extra cases are needed.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q2 {#question-2--a-rational-number-plus-an-irrational-number}

Prove by contradiction that $2+\sqrt3$ is irrational. You may use the result of Example 2.

<details markdown="1">
<summary>Hint</summary>

Assume the sum is rational. What follows after subtracting $2$?

</details>

<details markdown="1">
<summary>Solution and check</summary>

Assume $2+\sqrt3=r$, where $r$ is rational. Then $\sqrt3=r-2$ is rational, because subtracting an integer from a rational number gives a rational number. This contradicts the irrationality of $\sqrt3$.

Therefore $2+\sqrt3$ is irrational. The contradiction depends on the stated result for $\sqrt3$; the proof does not assume the desired conclusion.

</details>

</section>

<section class="lesson-check" markdown="1">

### Q3 {#question-3--test-a-statement}

Disprove: “For every real $x$, $x^2\geq x$.” Is the statement true if its domain is restricted to integers?

<details markdown="1">
<summary>Hint</summary>

Try a value between $0$ and $1$. For integer inputs, examine $x(x-1)$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

At $x=\frac12$, $x^2=\frac14<\frac12=x$, so this is a counter-example for the real domain.

For an integer $x$, either $x\leq0$ or $x\geq1$. In either case $x(x-1)\geq0$, so $x^2\geq x$. Thus the restricted statement is true.

The real counter-example is not an integer, so it does not disprove the restricted statement.

</details>

</section>

<section class="lesson-check" markdown="1">

### Another set of statements {#check-method}

For each statement, decide whether it is true and justify your decision. Choose your own argument. (a) For every integer $n$, if $n^2$ is odd, then $n$ is odd. (b) For every non-zero real $x$, $x^2>x$. (c) If $r$ is a non-zero rational number and $t$ is irrational, then $rt$ is irrational.

<details markdown="1">
<summary>Hint</summary>

State domain, assumptions and conclusion for each claim; the three need not use the same method.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** True. Suppose $n^2$ is odd but $n$ is not odd. As $n$ is an integer, $n=2k$ for an integer $k$. Then $n^2=4k^2=2(2k^2)$ is even, contradicting the assumption. Therefore $n$ is odd. This covers every integer.

**(b)** False. The allowed input $x=\frac12\ne0$ gives $x^2=\frac14<x$, so the claim fails.

**(c)** True. Suppose $rt=s$ is rational. Then $t=s/r$ is rational because $r$ is a non-zero rational, contradicting the irrationality of $t$. Thus $rt$ is irrational. The condition $r\ne0$ matters: if $r=0$, the product is zero.

</details>

</section>

## Repair the cause {#repair}

Identify the first invalid step and revisit its explanation. Close the original solution before trying the fresh task. Record your first answer, help and whether the retry still needed a hint.

| Error | Recovery action | Fresh task |
| --- | --- | --- |
| One implication called an equivalence, or division by zero | Check reverse direction and domain; [statements and symbols](#statements-and-symbols) | [Conditions](#repair-logic) |
| Only a few positive integers checked | Represent an arbitrary integer or exhaust the cases; [direct proof](#direct-proof) | [Integers](#repair-direct) |
| Contradiction has no named conflict | State the opposite assumption and incompatible known fact; [contradiction](#proof-by-contradiction) | [Reciprocal](#repair-contradiction) |
| Counter-example fails the assumption | Check domain, premise and conclusion separately; [counter-examples](#disproof-by-counter-example) | [Equality](#repair-counterexample) |

<section class="lesson-check" markdown="1">

### Conditions {#repair-logic}

For real $x$, determine exactly when $\sqrt{x^2}=x$. Express your conclusion using $\Leftrightarrow$.

<details markdown="1">
<summary>Hint</summary>

The square-root symbol denotes the non-negative root.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\sqrt{x^2}=\lvert x\rvert,\qquad\sqrt{x^2}=x\Leftrightarrow x\ge0.$$

The real domain includes negative inputs; x=-1 makes the proposed unrestricted identity fail.

</details>

</section>

<section class="lesson-check" markdown="1">

### Integers {#repair-direct}

Prove that $n(n+1)$ is even for every integer $n$.

<details markdown="1">
<summary>Hint</summary>

Split by the parity of n; ensure the cases include negatives and zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

If $n=2k$, then $n(n+1)=2[k(2k+1)]$. If $n=2k+1$, then $n(n+1)=2[(2k+1)(k+1)]$. Here $k\in\mathbb Z$, both bracketed expressions are integers, and the two cases cover every integer. Thus the product is always even.

</details>

</section>

<section class="lesson-check" markdown="1">

### A reciprocal {#repair-contradiction}

Let $t$ be a non-zero irrational number. Prove that $1/t$ is irrational.

<details markdown="1">
<summary>Hint</summary>

Suppose the reciprocal is rational; first check whether that rational can be zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Suppose $1/t=q$ is rational. Since $t\ne0$, $1/t\ne0$, so $q\ne0$. Hence $t=1/q$ is rational, contradicting the given irrationality of $t$. Thus $1/t$ is irrational. Division by $q$ is justified; no decimal approximation is used.

</details>

</section>

<section class="lesson-check" markdown="1">

### Equality {#repair-counterexample}

Disprove: for all real $a,b$, if $a^2=b^2$, then $a=b$.

<details markdown="1">
<summary>Hint</summary>

Find two distinct allowed numbers and verify equality of their squares.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Take $a=1$, $b=-1$. Both are real and $a^2=b^2=1$, but $a\ne b$. The premise is true and conclusion false, so this is a valid counter-example to the universal claim.

</details>

</section>

## Later review {#review-later}

At a later mixed-revision lesson, hide the method table and attempt this task. Copying an answer after reading it is not independent proof.

<section class="lesson-check" markdown="1">

### An inequality {#review-inequality}

Decide whether each claim is true and justify your decision: (a) for every positive real $x$, $x+1/x\ge2$; (b) for every non-zero real $x$, $x+1/x\ge2$. For any true claim, state when equality holds.

<details markdown="1">
<summary>Hint</summary>

If starting from a non-negative expression, check what division does to the inequality.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$(x-1)^2\ge0\Rightarrow x^2+1\ge2x.$$

**(a)** As $x>0$, division by $x$ preserves the inequality, giving $x+1/x\ge2$, with equality exactly when $x=1$. This covers every positive real. **(b)** False: $x=-1\ne0$ gives $-2<2$. The division-sign condition in the first argument does not hold throughout the enlarged domain.

</details>

</section>

## Quick Reference {#quick-reference}

| Task | Method | Check |
|---|---|---|
| Prove directly | Start with the assumptions and use algebra or known results | Cover every allowed value |
| Prove by contradiction | Assume the opposite and derive an impossibility | Name the contradiction and conclude |
| Disprove by counter-example | Give one allowed case that fails | Satisfy the assumption but fail the conclusion |
| Use $\Leftrightarrow$ | Justify both directions | An implication alone is not an equivalence |

**You should be able to:** use mathematical language, write a direct proof, prove by contradiction and disprove a statement by counter-example.

**Learning path:** [Previous: Vectors](/alevel/a2-mathematics/vectors/) · [Return to the Pure Mathematics topic index](/alevel/a2-mathematics/).

**Next step:** complete [the moving-point argument](/alevel/a2-mathematics/vectors/#review-point), then return to [the inequality](#review-inequality) during later mixed revision. Check allowed values, reasons for each step and the conclusion.
{: #next-step}

<details markdown="1">
<summary>Sources and verification scope</summary>

Scope: mathematical language, argument and proof in the 9660 MA03 Unit P2 introduction. January 2024 Q12(a) (QP p26, MS p21) was read for a general parameter relation consistent in every component. It does not assess contradiction or counter-example proofs.

**Supplementary teaching evidence from another qualification:** the author (Sagan) read AQA A-level Mathematics 7357/2, June 2023 Q10(b)(c), QP pp16–17 and MS p16. The pair supports an admissible counter-example with an explicit comparison that defeats the claim, and a contradiction argument that retains the assumptions, negates the conclusion, derives an impossibility and concludes. MA03 scope remains defined by the 9660 specification; all tasks here are self-written, with no 7357 marks or assessment objectives adopted.

[9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf) · [January 2024 QP](https://aqamat.alevelclouds.com/24_01_QP_P2.pdf) / [MS](https://aqamat.alevelclouds.com/24_01_MS_P2.pdf)

Other qualification: [AQA 7357/2 June 2023 QP](https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-73572-QP-JUN23.PDF) / [MS](https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-73572-MS-JUN23.PDF)

</details>
