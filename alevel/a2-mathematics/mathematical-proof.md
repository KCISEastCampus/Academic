---
title: Mathematical Proof
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/mathematical-proof/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · Mathematical arguments for MA03

Explain why a statement is true, or give a counter-example to show that it is false.

- **Learning:** start with [statements and symbols](#statements-and-symbols), then compare the three methods.
- **Homework help:** state the assumptions, justify each step and finish with the statement you have proved.
- **Revision:** try [practice](#practice) before opening the solutions.

Source: [OxfordAQA Mathematics specification, Unit P2, printed p. 19](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf). Proof by contradiction and disproof by counter-example are required. This is a syllabus supplement; the supplied textbook does not have a separate proof section.

**Before you start:** you should know factorisation, fractions in lowest terms, and even and odd integers. All examples and practice questions are self-written teaching exercises.

## Statements and Symbols

A statement must say which values it covers. For example, “$n^2$ is even” is not true for every integer $n$.

| Language or symbol | Meaning | Example |
|---|---|---|
| $=$, equals | The two values are equal | $x^2=4$ holds when $x=2$ or $x=-2$ |
| $\equiv$, identically equals | Both expressions agree for every allowed value | $(x+1)^2\equiv x^2+2x+1$ |
| $P\Rightarrow Q$, implies | Whenever $P$ is true, $Q$ is true | $x=2\Rightarrow x^2=4$ |
| $P\Leftarrow Q$, is implied by | Whenever $Q$ is true, $P$ is true | $x^2=4\Leftarrow x=2$ |
| $P\Leftrightarrow Q$, if and only if | Both directions hold | $x^2=4\Leftrightarrow x=2\text{ or }x=-2$ |

In $P\Rightarrow Q$, $P$ is **sufficient** for $Q$, and $Q$ is **necessary** for $P$. For example, $x=2$ is sufficient for $x^2=4$. It is not necessary, since $x=-2$ also works. The condition $x^2=4$ is necessary for $x=2$, but is not sufficient.

Use words such as **because**, **therefore** and **hence** to explain how one step follows from another. The symbol $\therefore$ means “therefore”.

## Direct Proof

Start with the given assumptions and use valid steps to reach the conclusion. Use algebra to cover every allowed value, rather than checking a few examples.

### Example 1 — The square of an odd integer

**Question:** Prove that the square of every odd integer is odd.

Let $n=2k+1$, where $k$ is an integer. Then

$$n^2=(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1.$$

Since $2k^2+2k$ is an integer, this has the form $2m+1$ for an integer $m$. Therefore $n^2$ is odd.

**Check the argument:** it covers every odd integer, including negative ones. Calculating $3^2=9$ alone would not prove the statement.

## Proof by Contradiction

Assume the opposite of the statement you want to prove. Show that this assumption leads to a **contradiction**: two facts which cannot both be true. State why the original statement must therefore be true.

### Example 2 — An irrational square root

**Question:** Prove that $\sqrt3$ is irrational.

Assume that $\sqrt3$ is rational. Then

$$\sqrt3=\frac pq,$$

where $p$ and $q$ are integers with no common factor greater than $1$, and $q\ne0$. Squaring gives $p^2=3q^2$, so $p^2$ is divisible by $3$.

An integer not divisible by $3$ has the form $3k+1$ or $3k-1$. Its square has remainder $1$ when divided by $3$. Hence $p$ must be divisible by $3$.

Write $p=3r$. Then $9r^2=3q^2$, so $q^2=3r^2$. The same argument shows that $q$ is divisible by $3$.

Thus $p$ and $q$ have a common factor $3$, contradicting our choice of a fraction in lowest terms. Therefore $\sqrt3$ is irrational.

**Common mistake:** ending with “$p$ and $q$ are divisible by $3$” without explaining the contradiction.

## Disproof by Counter-example

A **counter-example** is one allowed value for which a statement fails. One counter-example disproves a statement about **all** allowed values.

### Example 3 — A positive product

**Question:** Disprove: “For all real $a$ and $b$, if $ab>0$, then $a>0$ and $b>0$.”

Take $a=-2$ and $b=-3$. Then $ab=6>0$, but both numbers are negative. These allowed values make the assumption true and the conclusion false, so they disprove the statement.

**Common mistake:** using a value outside the stated domain, or one that does not satisfy the assumption. Positive values which work do not prove the statement for all real values.

## Practice

Allow about **15–20 minutes**. Explain each step; do not give only numerical checks.

### Question 1 — Consecutive integers

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

### Question 2 — A rational number plus an irrational number

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

### Question 3 — Test a statement

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

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Prove directly | Start with the assumptions and use algebra or known results | Cover every allowed value |
| Prove by contradiction | Assume the opposite and derive an impossibility | Name the contradiction and conclude |
| Disprove by counter-example | Give one allowed case that fails | Satisfy the assumption but fail the conclusion |
| Use $\Leftrightarrow$ | Justify both directions | An implication alone is not an equivalence |

**You should be able to:** use mathematical language, write a direct proof, prove by contradiction and disprove a statement by counter-example.

**Learning path:** [Previous: Vectors](/alevel/a2-mathematics/vectors/) · [Return to the Pure Mathematics topic index](/alevel/a2-mathematics/).
