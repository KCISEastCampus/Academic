---
title: Proof by Induction
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/proof-by-induction/
toc_headings: h2
study_page: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.4 Proof by induction

Prove that a statement is true for every integer in a given range. Learn how to use the assumption for $n=k$ to prove the next case.

- **Learning:** start with the [method](#method), then follow a complete proof.
- **Homework help:** choose [series and sequences](#series-and-sequences), [divisibility](#divisibility) or [other applications](#other-applications).
- **Revision:** try [practice](#practice) before opening the solutions, then use the [quick reference](#quick-reference).

Textbook: Chapter 18, Section 18.1, printed pp. 208–215; review and practice examination questions on pp. 217–218, in *International A Level Further Mathematics*.

**Before you start:** you should know summation notation, sequences, index laws and algebraic factorisation. For the later examples, review complex numbers, compound angle formulae, differentiation and matrix multiplication in [AS Further Mathematics](/alevel/as-further-mathematics/) and [A2 Pure Mathematics](/alevel/a2-mathematics/).

## Method

**Learning goal:** write a complete proof by induction for a series, a recurrence relation, a divisibility statement or another formula involving a positive integer.

Checking a few values can help you find an error. It does **not** prove a statement for every integer.

A proof by induction has four parts:

1. **Initial case:** show that the statement is true for the first integer in the range, usually $n=1$.
2. **Assumption:** assume that the statement is true for $n=k$, where $k$ is any integer in the stated range. Write the statement for $n=k$.
3. **Inductive step:** use this assumption to prove that the statement is true for $n=k+1$.
4. **Conclusion:** state that the initial case is true and that, if the statement is true for $n=k$, it is true for $n=k+1$. Then conclude that it is true for all integers in the stated range by mathematical induction.

The assumption for $n=k$ is the **induction hypothesis**. You are proving: *if the statement is true at $k$, then it is true at $k+1$*. You are not assuming that it is already true for all $n$.

### Choose the next step

| Type of statement | Start the inductive step with | What to show |
|---|---|---|
| Sum of a series | $S_{k+1}=S_k+u_{k+1}$ | Add the next term, then obtain the formula with $k+1$ in place of $n$ |
| Recurrence relation | The rule defining $u_{k+1}$ | Substitute the assumed expression for $u_k$ |
| Divisibility | The expression at $k+1$ | Write it as an integer multiple of the expression at $k$, plus a multiple of the divisor |
| A power | $A^{k+1}=A^kA$, or $z^{k+1}=z^kz$ | Multiply once more and simplify |
| An $n$th derivative | Differentiate the assumed $k$th derivative | Obtain the formula for derivative $k+1$ |

**Before simplifying:** write down the formula you need at $k+1$. Replace **every** occurrence of $n$, including those inside brackets and powers.

**Common mistake:** starting with the formula you want at $k+1$ and treating it as true. Start with an expression you know, then use the induction hypothesis.

Use complete sentences in the proof. In the conclusion, include the initial case and the link from $k$ to $k+1$; do not write only “proved by induction”. If the question starts at $n=2$, check $n=2$ and conclude for all integers $n\ge2$.

## Series and Sequences

### Example 1 — A sum of squares

**Question:** prove that, for all integers $n\ge1$,

$$\sum_{r=1}^{n}r^2=\frac{n(n+1)(2n+1)}{6}.$$

**Initial case:** at $n=1$, the left side is $1$ and the right side is $\frac{1(2)(3)}{6}=1$.

**Assumption:** assume that the formula is true for $n=k$, where $k$ is any integer such that $k\ge1$. Then

$$S_k=\sum_{r=1}^{k}r^2=\frac{k(k+1)(2k+1)}{6}.$$

**Inductive step:** add $(k+1)^2$, the next term:

$$\begin{aligned}
S_{k+1}
&=S_k+(k+1)^2\\
&=\frac{k(k+1)(2k+1)}{6}+(k+1)^2\\
&=\frac{(k+1)[k(2k+1)+6(k+1)]}{6}\\
&=\frac{(k+1)(2k^2+7k+6)}{6}\\
&=\frac{(k+1)(k+2)(2k+3)}{6}.
\end{aligned}$$

This is the required formula with $n=k+1$, since $2(k+1)+1=2k+3$.

**Conclusion:** the formula is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore it is true for all integers $n\ge1$ by mathematical induction.

**Check:** at $n=2$, both sides equal $5$. This checks the calculation; the inductive step proves the general result.

### Example 2 — A recurrence relation

**Question:** a sequence is defined by

$$u_1=3,\qquad u_{n+1}=u_n+2n+1.$$

Prove that $u_n=n^2+2$ for all integers $n\ge1$.

**Initial case:** $u_1=3=1^2+2$.

**Assumption:** assume that the formula is true for $n=k$, where $k$ is any integer such that $k\ge1$. Then $u_k=k^2+2$.

**Inductive step:** use the recurrence relation, with $n=k$:

$$\begin{aligned}
u_{k+1}&=u_k+2k+1\\
&=k^2+2+2k+1\\
&=(k+1)^2+2.
\end{aligned}$$

This is the required formula at $k+1$.

**Conclusion:** the formula is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore $u_n=n^2+2$ for all integers $n\ge1$ by mathematical induction.

**Check:** the recurrence gives $u_2=6$ and $u_3=11$, which agree with the formula.

### When two previous terms are needed

If a recurrence uses both $u_n$ and $u_{n+1}$ to define $u_{n+2}$, check **two initial cases**. Assume the formula for both $u_k$ and $u_{k+1}$, then use them to prove the formula for $u_{k+2}$. Question 2 gives practice with this form.

## Divisibility

To say that $u_n$ is divisible by $d$ means that $u_n=dm$ for some integer $m$.

In the inductive step, a useful form is

$$u_{k+1}=a u_k+d b,$$

where $a$ and $b$ are integers. If $u_k$ is divisible by $d$, both terms on the right are divisible by $d$.

**Choose $a$ to simplify the powers.** For example, if $u_k$ contains $7^k$ and $4^k$, subtracting $7u_k$ or $4u_k$ removes one power. Sometimes $u_{k+1}-u_k$ is enough.

**Common mistake:** proving that $d u_{k+1}$ is divisible by $d$. That is automatic for any integer $u_{k+1}$ and tells you nothing about whether $u_{k+1}$ itself is divisible by $d$.

### Example 3 — Proving divisibility by 6

**Question:** prove that $7^n+4^n+1$ is divisible by $6$ for all integers $n\ge1$.

Let $u_n=7^n+4^n+1$.

**Initial case:** $u_1=7+4+1=12$, which is divisible by $6$.

**Assumption:** assume that the result is true for $n=k$, where $k$ is any integer such that $k\ge1$. Then $u_k$ is divisible by $6$.

**Inductive step:**

$$\begin{aligned}
u_{k+1}-u_k
&=6\cdot7^k+3\cdot4^k\\
&=6\left(7^k+2^{2k-1}\right).
\end{aligned}$$

Since $k\ge1$, $2k-1\ge1$ and the expression in brackets is an integer. Thus $u_{k+1}-u_k$ is divisible by $6$. By the assumption, $u_k$ is divisible by $6$, so $u_{k+1}$ is also divisible by $6$.

**Conclusion:** the result is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore $7^n+4^n+1$ is divisible by $6$ for all integers $n\ge1$ by mathematical induction.

**Check:** $u_2=49+16+1=66$. When proving divisibility, state why the factor left after taking out $6$ is an integer.

## Other Applications

### Example 4 — De Moivre's theorem

**Question:** prove that, for every positive integer $n$,

$$\begin{aligned}
(\cos\theta+i\sin\theta)^n
&=\cos(n\theta)+i\sin(n\theta).
\end{aligned}$$

This proof is for **positive integer powers**. Further uses of the theorem belong to the later De Moivre's theorem lesson.

**Initial case:** at $n=1$, both sides are $\cos\theta+i\sin\theta$.

**Assumption:** assume that the formula is true for $n=k$, where $k$ is any integer such that $k\ge1$.

**Inductive step:** write $z=\cos\theta+i\sin\theta$. By the assumption,

$$\begin{aligned}
z^{k+1}
&=z^kz\\
&=[\cos(k\theta)+i\sin(k\theta)]\\
&\qquad{}\times(\cos\theta+i\sin\theta).
\end{aligned}$$

Multiplying and using $i^2=-1$ gives a real part

$$\begin{aligned}
&\cos(k\theta)\cos\theta-\sin(k\theta)\sin\theta\\
&\qquad=\cos((k+1)\theta),
\end{aligned}$$

and an imaginary part

$$\begin{aligned}
&\sin(k\theta)\cos\theta+\cos(k\theta)\sin\theta\\
&\qquad=\sin((k+1)\theta).
\end{aligned}$$

These are the compound angle formulae. Hence

$$z^{k+1}=\cos((k+1)\theta)+i\sin((k+1)\theta).$$

**Conclusion:** the theorem is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore it is true for all positive integers $n$ by mathematical induction.

**Common mistake:** using De Moivre's theorem to justify the multiplication in a proof of De Moivre's theorem. Use the compound angle formulae instead.

### Example 5 — An nth derivative

**Question:** for $f(x)=e^x\sin x$, prove that, for all integers $n\ge1$,

$$f^{(n)}(x)=2^{n/2}e^x\sin\left(x+\frac{n\pi}{4}\right).$$

Here $f^{(n)}$ means the $n$th derivative, not the $n$th power. Angles are in radians.

**Initial case:** by the product rule,

$$\begin{aligned}
f'(x)&=e^x(\sin x+\cos x)\\
&=\sqrt2\,e^x\sin\left(x+\frac{\pi}{4}\right).
\end{aligned}$$

This is the formula at $n=1$, using $\sin t+\cos t=\sqrt2\sin(t+\frac{\pi}{4})$.

**Assumption:** assume that the formula is true for $n=k$, where $k$ is any integer such that $k\ge1$. Put $\phi=x+\frac{k\pi}{4}$.

**Inductive step:** differentiate the assumed expression. Since $\frac{\mathrm d\phi}{\mathrm dx}=1$,

$$\begin{aligned}
f^{(k+1)}(x)
&=2^{k/2}e^x(\sin\phi+\cos\phi)\\
&=2^{(k+1)/2}e^x
  \sin\left(x+\frac{(k+1)\pi}{4}\right).
\end{aligned}$$

This is the required expression at $k+1$.

**Conclusion:** the formula is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore it is true for all integers $n\ge1$ by mathematical induction.

**Check:** differentiating twice gives $f^{(2)}(x)=2e^x\cos x$, which agrees with $2e^x\sin(x+\frac{\pi}{2})$.

### Example 6 — A matrix power

**Question:** given

$$A=\begin{pmatrix}3&2\\0&1\end{pmatrix},$$

prove that, for all integers $n\ge1$,

$$A^n=\begin{pmatrix}3^n&3^n-1\\0&1\end{pmatrix}.$$

**Initial case:** the formula at $n=1$ gives

$$\begin{pmatrix}3&2\\0&1\end{pmatrix}=A.$$

**Assumption:** assume that the formula is true for $n=k$, where $k$ is any integer such that $k\ge1$.

**Inductive step:** use matrix multiplication, not multiplication of matching entries:

$$\begin{aligned}
A^{k+1}
&=A^kA\\
&=\begin{pmatrix}3^k&3^k-1\\0&1\end{pmatrix}
  \begin{pmatrix}3&2\\0&1\end{pmatrix}\\
&=\begin{pmatrix}3^{k+1}&2\cdot3^k+3^k-1\\0&1\end{pmatrix}\\
&=\begin{pmatrix}3^{k+1}&3^{k+1}-1\\0&1\end{pmatrix}.
\end{aligned}$$

This is the required matrix at $k+1$.

**Conclusion:** the formula is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore it is true for all integers $n\ge1$ by mathematical induction.

**Check:** multiplying gives

$$A^2=\begin{pmatrix}9&8\\0&1\end{pmatrix}.$$

Do not square each entry of $A$.

## Practice

Try each proof without the solution. Show the initial case, the assumption, the inductive step and the conclusion.

Questions 1–5 are self-written exercises. Question 6 is an original AQA question reproduced in the supplied textbook.

### Question 1 — A sum of cubes

Prove that, for all integers $n\ge1$,

$$\sum_{r=1}^{n}r^3=\frac{n^2(n+1)^2}{4}.$$

<details markdown="1">
<summary>Hint</summary>

Add $(k+1)^3$ to the assumed sum. Take out $\frac{(k+1)^2}{4}$ and factor the remaining quadratic.

</details>

<details markdown="1">
<summary>Solution and check</summary>

At $n=1$, both sides equal $1$.

Assume that the formula is true for $n=k$, where $k$ is any integer such that $k\ge1$. Then $S_k=\frac{k^2(k+1)^2}{4}$, so

$$\begin{aligned}
S_{k+1}
&=S_k+(k+1)^3\\
&=\frac{k^2(k+1)^2}{4}+(k+1)^3\\
&=\frac{(k+1)^2[k^2+4(k+1)]}{4}\\
&=\frac{(k+1)^2(k+2)^2}{4}.
\end{aligned}$$

This is the required formula for $n=k+1$. The formula is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore it is true for all integers $n\ge1$ by mathematical induction.

**Check:** $1^3+2^3=9=\frac{2^2\cdot3^2}{4}$.

</details>

### Question 2 — Two initial cases

A sequence has $u_1=1$, $u_2=3$ and

$$u_{n+2}=3u_{n+1}-2u_n.$$

Prove that $u_n=2^n-1$ for all integers $n\ge1$.

<details markdown="1">
<summary>Hint</summary>

Check $n=1$ and $n=2$. Assume the formula at both $k$ and $k+1$, then use the recurrence to find $u_{k+2}$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The formula gives $2^1-1=1=u_1$ and $2^2-1=3=u_2$.

Let $k$ be any integer such that $k\ge1$. Assume that the formula is true for both $n=k$ and $n=k+1$. Then $u_k=2^k-1$ and $u_{k+1}=2^{k+1}-1$, so

$$\begin{aligned}
u_{k+2}
&=3(2^{k+1}-1)-2(2^k-1)\\
&=(6-2)2^k-1\\
&=2^{k+2}-1.
\end{aligned}$$

The formula is true for $n=1$ and $n=2$. If it is true for both $n=k$ and $n=k+1$, it is true for $n=k+2$. Therefore it is true for all integers $n\ge1$ by mathematical induction.

**Check:** $u_3=3(3)-2(1)=7=2^3-1$.

</details>

### Question 3 — Choose a useful multiple

Prove that $11^n-3^n$ is divisible by $8$ for all integers $n\ge1$.

<details markdown="1">
<summary>Hint</summary>

Let $u_n=11^n-3^n$ and simplify $u_{k+1}-3u_k$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

At $n=1$, $u_1=11-3=8$, which is divisible by $8$.

Assume that the result is true for $n=k$, where $k$ is any integer such that $k\ge1$. Then $u_k$ is divisible by $8$, and

$$u_{k+1}-3u_k=8\cdot11^k.$$

By the assumption, $u_k$ is divisible by $8$. Also, $11^k$ is an integer. Hence $u_{k+1}=3u_k+8\cdot11^k$ is divisible by $8$.

The result is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore $11^n-3^n$ is divisible by $8$ for all integers $n\ge1$ by mathematical induction.

**Check:** $u_2=121-9=112=8(14)$.

</details>

### Question 4 — A different matrix

Given

$$B=\begin{pmatrix}1&0\\5&1\end{pmatrix},$$

prove that, for all integers $n\ge1$,

$$B^n=\begin{pmatrix}1&0\\5n&1\end{pmatrix}.$$

<details markdown="1">
<summary>Hint</summary>

Use $B^{k+1}=B^kB$. The bottom-left entry should become $5(k+1)$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

At $n=1$, the formula gives $B$.

Assume that the formula is true for $n=k$, where $k$ is any integer such that $k\ge1$. Then

$$B^k=\begin{pmatrix}1&0\\5k&1\end{pmatrix}.$$

Then

$$\begin{aligned}
B^{k+1}
&=B^kB\\
&=\begin{pmatrix}1&0\\5k&1\end{pmatrix}
  \begin{pmatrix}1&0\\5&1\end{pmatrix}\\
&=\begin{pmatrix}1&0\\5(k+1)&1\end{pmatrix}.
\end{aligned}$$

This is the formula for $n=k+1$. The formula is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore it is true for all integers $n\ge1$ by mathematical induction.

**Check:**

$$B^2=\begin{pmatrix}1&0\\10&1\end{pmatrix}.$$

</details>

### Question 5 — A derivative with cosine

For $g(x)=e^x\cos x$, prove that, for all integers $n\ge1$,

$$g^{(n)}(x)=2^{n/2}e^x\cos\left(x+\frac{n\pi}{4}\right).$$

<details markdown="1">
<summary>Hint</summary>

Use $\cos t-\sin t=\sqrt2\cos(t+\frac{\pi}{4})$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

At $n=1$,

$$\begin{aligned}
g'(x)&=e^x(\cos x-\sin x)\\
&=\sqrt2\,e^x\cos\left(x+\frac{\pi}{4}\right).
\end{aligned}$$

Assume that the formula is true for $n=k$, where $k$ is any integer such that $k\ge1$. Let $\phi=x+\frac{k\pi}{4}$. Differentiating the assumed expression gives

$$\begin{aligned}
&g^{(k+1)}(x)\\
&\quad=2^{k/2}e^x(\cos\phi-\sin\phi)\\
&\quad=2^{(k+1)/2}e^x
  \cos\left(x+\frac{(k+1)\pi}{4}\right).
\end{aligned}$$

This is the formula for $n=k+1$. The formula is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore it is true for all integers $n\ge1$ by mathematical induction.

**Check:** the second derivative is

$$\begin{aligned}
g^{(2)}(x)&=-2e^x\sin x\\
&=2e^x\cos\left(x+\frac{\pi}{2}\right).
\end{aligned}$$

The minus sign matters.

</details>

### Question 6 — Original AQA practice

**Source:** AQA MFP2, June 2006, Question 6, reproduced as Chapter 18, practice examination Question 5, printed p. 218. Original wording and marks are retained.

**a** The function $f$ is given by

$$f(n)=15^n-8^{n-2}.$$

Express

$$f(n+1)-8f(n)$$

in the form $k\times15^n$. **(4 marks)**

**b** Prove by induction that $15^n-8^{n-2}$ is a multiple of $7$ for all integers $n\ge2$. **(4 marks)**

<details markdown="1">
<summary>Hint</summary>

In part a, the powers of $8$ cancel. In part b, start at $n=2$, then use the identity from part a.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

**a**

$$\begin{aligned}
f(n+1)-8f(n)
&=15^{n+1}-8^{n-1}\\
&\qquad{}-8(15^n-8^{n-2})\\
&=(15-8)15^n\\
&=7\times15^n.
\end{aligned}$$

Thus $k=7$.

**b Initial case:** at $n=2$,

$$f(2)=225-1=224=7(32).$$

**Assumption:** assume that the result is true for $n=m$, where $m$ is any integer such that $m\ge2$. Then $f(m)$ is a multiple of $7$. We use $m$ to avoid confusing the induction index with the coefficient $k$ in part a.

**Inductive step:** part a gives

$$f(m+1)=8f(m)+7\cdot15^m.$$

By the assumption, $f(m)$ is a multiple of $7$. Also, $15^m$ is an integer. Both terms on the right are therefore multiples of $7$, so $f(m+1)$ is a multiple of $7$.

**Conclusion:** the result is true for $n=2$. If it is true for $n=m$, it is true for $n=m+1$. Therefore $15^n-8^{n-2}$ is a multiple of $7$ for all integers $n\ge2$ by mathematical induction.

**Check:** $f(3)=3375-8=3367=7(481)$. Do not start this proof at $n=1$: $8^{n-2}$ would not be an integer.

This is our worked solution, not an official mark scheme.

</details>

## Quick Reference

| Part of a proof | What to write |
|---|---|
| Initial case | Substitute the first allowed integer into both sides, or check divisibility |
| Assumption | Assume the statement is true for $n=k$, where $k$ is any integer in the stated range |
| Inductive step | Use that assumption to obtain exactly the statement for $k+1$ |
| Conclusion | State the initial case, the link to the next case and the full range of $n$ |
| Two-term recurrence | Check two initial cases; assume two consecutive cases and prove the next |

**After practice:** if you added the wrong term, repeat Question 1. If you used only one initial case in a two-term recurrence, repeat Question 2. If the powers did not simplify, compare Example 3 and Question 3. If your proof started at the wrong integer, repeat Question 6.

**You should be able to:** explain why checking examples is not a proof, write an induction hypothesis, use it in the next case and state the correct range in your conclusion.

The lesson follows FP2.4 of the [OxfordAQA Further Mathematics 9665 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Worked examples are teaching material. Question 6 retains the AQA question and marks from the supplied textbook.

For examples of how induction is assessed, see [OxfordAQA FM03 specimen mark scheme, Question 10](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf) and [AQA June 2023 mark scheme, Paper 2, Question 12](https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-73672-MS-JUN23.PDF). Our solutions include the assumption, the calculation for the next case, the initial case and a full conclusion.

**Learning path:** [Previous: Roots and Polynomials](/alevel/a2-further-mathematics/roots-and-polynomials/) · [Back to the course](/alevel/a2-further-mathematics/) · [Next: Finite Series](/alevel/a2-further-mathematics/finite-series/).
