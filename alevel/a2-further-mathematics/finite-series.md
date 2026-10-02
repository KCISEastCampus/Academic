---
title: Finite Series
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/finite-series/
toc_headings: h2
study_page: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.5 Finite series

Find a sum without adding every term separately. Use partial fractions and the method of differences, and keep the terms that do not cancel.

- **Learning:** start with the [method](#method), then work through the examples.
- **Homework help:** choose [partial fractions](#partial-fractions), [differencing](#differencing) or [other starting points](#other-starting-points).
- **Revision:** try [practice](#practice) first, then use the [quick reference](#quick-reference).

Textbook: Chapter 18, Section 18.2, printed pp. 215–216; review and practice examination questions on pp. 217–218, in *International A Level Further Mathematics*.

**Before you start:** review [Partial Fractions](/alevel/a2-mathematics/partial-fractions/) and [Proof by Induction](/alevel/a2-further-mathematics/proof-by-induction/). You should be able to expand brackets and use summation notation.

## Method

**Learning goal:** choose a method for a finite sum, show how the terms cancel and give a formula with the correct lower and upper limits.

A **finite series** is the sum of a finite number of terms. In

$$\sum_{r=a}^{b}u_r=u_a+u_{a+1}+\cdots+u_b,$$

$r$ is the summation index. If $a$ and $b$ are integers with $a\le b$, there are $b-a+1$ terms.

### Choose a method

| Form of the terms | First step |
|---|---|
| An arithmetic or geometric series | Use the corresponding AS sum formula |
| A polynomial in $r$ | Split the sum into sums of powers of $r$ |
| A fraction with factorised denominator | Try partial fractions |
| A difference such as $v_r-v_{r+1}$ | Write out the first few and last few terms |
| A formula is given and you must prove it by induction | Check the initial case, then use $S_{k+1}=S_k+u_{k+1}$ |

**Use partial fractions to rewrite each term. Use the method of differences to find the sum.** After the rewrite, write enough terms to see what cancels. Do not reduce each fraction to a single number before showing the cancellation.

**Common mistake:** using the formula for a sum from $r=1$ when the question starts at another value. Either write the actual first term or subtract an earlier sum.

## Partial Fractions

### Example 1 — Consecutive denominators

**Question:** find

$$S_n=\sum_{r=1}^{n}\frac{1}{r(r+1)}.$$

First write

$$\frac{1}{r(r+1)}=\frac{1}{r}-\frac{1}{r+1}.$$

The identity follows by putting the right side over a common denominator. Now expand the sum:

$$\begin{aligned}
S_n
&=\left(1-\frac12\right)
 +\left(\frac12-\frac13\right)\\
&\qquad{}+\cdots
 +\left(\frac1n-\frac1{n+1}\right).
\end{aligned}$$

Every middle fraction occurs once with a plus sign and once with a minus sign. Only the first positive term and the last negative term remain:

$$\boxed{S_n=1-\frac1{n+1}=\frac{n}{n+1}.}$$

**Check:** at $n=1$, the original sum is $\frac12$, and the formula gives $\frac12$.

### Example 2 — A gap of two

**Question:** find

$$T_n=\sum_{r=1}^{n}\frac{1}{r(r+2)}.$$

Partial fractions give

$$\frac{1}{r(r+2)}
=\frac12\left(\frac1r-\frac1{r+2}\right).$$

For $n\ge2$, write the terms as two rows:

$$\begin{aligned}
2T_n
&=\left(1+\frac12+\frac13+\cdots+\frac1n\right)\\
&\quad{}-\left(\frac13+\frac14+\cdots+\frac1{n+2}\right).
\end{aligned}$$

The common terms cancel, leaving two terms at each end:

$$\boxed{T_n=\frac12\left(1+\frac12-\frac1{n+1}-\frac1{n+2}\right).}$$

This also holds at $n=1$: the expression gives $\frac12(1-\frac13)=\frac13$, as required.

**Check:** at $n=2$, $\frac13+\frac18=\frac{11}{24}$, which agrees with the formula.

**Common mistake:** keeping only the first and last terms. The shift is two, so keep **two terms at each end**. For short sums, check the formula directly when the displayed cancellation pattern overlaps.

## Differencing

The **method of differences**, also called differencing, uses cancellation between terms of a sum. In its simplest form,

$$\boxed{\sum_{r=a}^{b}(v_r-v_{r+1})=v_a-v_{b+1}.}$$

Notice the final index $b+1$, not $b$. If the difference is $v_r-v_{r+2}$, two terms at each end remain.

### Example 3 — Three factors in the denominator

**Question:** find

$$U_n=\sum_{r=1}^{n}\frac{2}{r(r+1)(r+2)}.$$

A useful difference is

$$\begin{aligned}
\frac{2}{r(r+1)(r+2)}
&=\frac{1}{r(r+1)}-\frac{1}{(r+1)(r+2)}.
\end{aligned}$$

It follows because the numerator on the right is $(r+2)-r=2$.

Put $v_r=\frac{1}{r(r+1)}$. The term is $v_r-v_{r+1}$, so

$$\boxed{U_n=\frac12-\frac{1}{(n+1)(n+2)}.}$$

You can also use partial fractions:

$$\frac{2}{r(r+1)(r+2)}
=\frac1r-\frac2{r+1}+\frac1{r+2}.$$

For $n\ge2$, the surviving terms give

$$U_n=1-\frac12-\frac1{n+1}+\frac1{n+2},$$

which is the same answer. At $n=1$, either final formula gives $\frac13$.

**Check:** at $n=2$, the original sum is $\frac13+\frac1{12}=\frac5{12}$.

**Choose the shorter route:** a difference of two fractions with quadratic denominators can make cancellation easier to see than three separate linear fractions.

## Other Starting Points

### Example 4 — A different lower limit

**Question:** find

$$V_n=\sum_{r=3}^{n}(r^2+2r),\qquad n\ge3.$$

Split the sum and use the standard formulae:

$$\begin{aligned}
\sum_{r=1}^{n}r&=\frac{n(n+1)}2,\\
\sum_{r=1}^{n}r^2&=\frac{n(n+1)(2n+1)}6.
\end{aligned}$$

The sum from $r=1$ is

$$\begin{aligned}
\sum_{r=1}^{n}(r^2+2r)
&=\frac{n(n+1)(2n+1)}6+n(n+1)\\
&=\frac{n(n+1)(2n+7)}6.
\end{aligned}$$

Remove the terms at $r=1$ and $r=2$, which are $3$ and $8$:

$$\boxed{V_n=\frac{n(n+1)(2n+7)}6-11.}$$

**Check:** at $n=3$, there is just one term, $9+6=15$. The formula gives $\frac{3(4)(13)}6-11=15$.

**Common mistake:** a constant inside a sum is counted once for every term. Here $\sum_{r=3}^{n}c=(n-2)c$, not $c$.

### Proving a sum by induction

If the question says **prove by induction**, cancellation alone does not meet that instruction. For Example 1, a proof by induction is:

**Initial case:** $S_1=\frac12=\frac1{1+1}$.

**Assumption:** assume that the formula is true for $n=k$, where $k$ is any integer such that $k\ge1$. Then $S_k=\frac{k}{k+1}$.

**Inductive step:**

$$\begin{aligned}
S_{k+1}
&=S_k+\frac1{(k+1)(k+2)}\\
&=\frac{k}{k+1}+\frac1{(k+1)(k+2)}\\
&=\frac{k(k+2)+1}{(k+1)(k+2)}\\
&=\frac{(k+1)^2}{(k+1)(k+2)}\\
&=\frac{k+1}{k+2}.
\end{aligned}$$

This is the formula for $n=k+1$. The formula is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore $S_n=\frac{n}{n+1}$ for all integers $n\ge1$ by mathematical induction.

## Practice

For Questions 1–3, show the partial fractions or difference you use and the terms left after cancellation. For Question 4, write a complete induction proof.

Questions 1–4 are self-written exercises. Question 5 is an original AQA question reproduced in the supplied textbook.

### Question 1 — Odd denominators

Find, for integers $n\ge1$,

$$\sum_{r=1}^{n}\frac1{(2r-1)(2r+1)}.$$

<details markdown="1">
<summary>Hint</summary>

Use $\frac12\left(\frac1{2r-1}-\frac1{2r+1}\right)$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Partial fractions give

$$\begin{aligned}
&\frac1{(2r-1)(2r+1)}\\
&\qquad=\frac12\left(\frac1{2r-1}-\frac1{2r+1}\right).
\end{aligned}$$

The sum becomes

$$\begin{aligned}
&\frac12\bigg[\left(1-\frac13\right)
+\left(\frac13-\frac15\right)\\
&\qquad{}+\cdots+\left(\frac1{2n-1}-\frac1{2n+1}\right)\bigg].
\end{aligned}$$

After cancellation,

$$\boxed{\frac12\left(1-\frac1{2n+1}\right)=\frac{n}{2n+1}.}$$

**Check:** at $n=2$, $\frac13+\frac1{15}=\frac25$.

</details>

### Question 2 — Start at r = 2

Find, for integers $n\ge2$,

$$\sum_{r=2}^{n}\frac1{r^2-1}.$$

<details markdown="1">
<summary>Hint</summary>

Factor $r^2-1$. The partial fractions have a shift of two.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac1{r^2-1}=\frac12\left(\frac1{r-1}-\frac1{r+1}\right).$$

For $n\ge3$, cancellation leaves

$$\boxed{\frac12\left(1+\frac12-\frac1n-\frac1{n+1}\right).}$$

At $n=2$, the same expression gives $\frac13$, so the formula holds for every integer $n\ge2$.

**Check:** the first term is $\frac1{2^2-1}=\frac13$. Starting at $r=1$ would make a denominator zero.

</details>

### Question 3 — A sum over a shorter interval

Find

$$\sum_{r=5}^{12}\frac1{r(r+1)(r+2)}.$$

<details markdown="1">
<summary>Hint</summary>

Use half the difference from Example 3. Keep the terms at $r=5$ and $r=13$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
&\frac1{r(r+1)(r+2)}\\
&\qquad=\frac12\left[\frac1{r(r+1)}-\frac1{(r+1)(r+2)}\right].
\end{aligned}$$

After cancellation, the sum is

$$\boxed{\frac12\left(\frac1{5\cdot6}-\frac1{13\cdot14}\right)
=\frac{19}{1365}.}$$

**Check:** both surviving fractions are positive, and the first is larger, so the answer is positive.

</details>

### Question 4 — Prove a sum by induction

Prove that, for all integers $n\ge1$,

$$\sum_{r=1}^{n}\frac{2r+1}{r^2(r+1)^2}
=1-\frac1{(n+1)^2}.$$

<details markdown="1">
<summary>Hint</summary>

Use $\frac{2r+1}{r^2(r+1)^2}=\frac1{r^2}-\frac1{(r+1)^2}$ to simplify the inductive step. Still show the initial case and conclusion.

</details>

<details markdown="1">
<summary>Solution and check</summary>

At $n=1$, the left side is $\frac34$ and the right side is $1-\frac14=\frac34$.

Assume that the formula is true for $n=k$, where $k$ is any integer such that $k\ge1$. Then $S_k=1-\frac1{(k+1)^2}$. Adding the next term gives

$$\begin{aligned}
&S_{k+1}\\
&\quad=1-\frac1{(k+1)^2}\\
&\qquad{}+\frac{2k+3}{(k+1)^2(k+2)^2}\\
&\quad=1-\frac1{(k+1)^2}\\
&\qquad{}+\frac1{(k+1)^2}-\frac1{(k+2)^2}\\
&\quad=1-\frac1{(k+2)^2}.
\end{aligned}$$

This is the formula for $n=k+1$. The formula is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore it is true for all integers $n\ge1$ by mathematical induction.

**Check:** at $n=2$, the terms are $\frac34$ and $\frac5{36}$. Their sum is $\frac89$, which equals $1-\frac19$.

</details>

### Question 5 — Original AQA practice

**Source:** AQA MFP2, June 2010, as reproduced in Chapter 18, practice examination question 6, printed p. 218. Original wording and marks are retained.

**a** Express

$$\frac1{r(r+2)}$$

in partial fractions. **(3 marks)**

**b** Use the method of differences to find

$$\sum_{r=1}^{48}\frac1{r(r+2)},$$

giving your answer as a rational number. **(5 marks)**

<details markdown="1">
<summary>Hint</summary>

Use Example 2. After cancellation, keep two terms at each end and give an exact fraction.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

**a** Set

$$\frac1{r(r+2)}=\frac{A}{r}+\frac{B}{r+2}.$$

Multiplying by $r(r+2)$ gives $1=A(r+2)+Br$. Comparing coefficients gives $2A=1$ and $A+B=0$. Hence $A=\frac12$ and $B=-\frac12$.

**b** Substituting the partial fractions gives

$$\begin{aligned}
\sum_{r=1}^{48}\frac1{r(r+2)}
&=\frac12\sum_{r=1}^{48}\left(\frac1r-\frac1{r+2}\right)\\
&=\frac12\left(1+\frac12-\frac1{49}-\frac1{50}\right)\\
&=\boxed{\frac{3576}{4900}=\frac{894}{1225}}.
\end{aligned}$$

The middle terms cancel because the positive denominators run from $1$ to $48$ and the negative denominators run from $3$ to $50$.

**Check:** the exact answer is a little less than $\frac34$, as the two remaining negative fractions are small and positive.

This is our worked solution, not an official mark scheme.

</details>

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Consecutive difference | $\displaystyle \sum_{r=a}^{b}(v_r-v_{r+1})=v_a-v_{b+1}$ | The final index is $b+1$ |
| Shift of two | Keep two terms at each end | Check short sums directly if terms overlap |
| Lower limit $a>1$ | Subtract the sum up to $a-1$ from the sum up to $b$ | Remove exactly the terms before $a$ |
| Sum of powers | $\displaystyle \sum r=\frac{n(n+1)}2$; $\displaystyle \sum r^2=\frac{n(n+1)(2n+1)}6$; $\displaystyle \sum r^3=\frac{n^2(n+1)^2}4$ | These formulae start at $r=1$ and end at $r=n$ |
| Proof by induction | Add $u_{k+1}$ to the assumed $S_k$ | Include the initial case and the full conclusion |

**After practice:** if you lost a factor of $\frac12$, repeat Question 1. If you kept too few terms, repeat Question 2. If the final denominator was wrong, repeat Question 3. If you used cancellation when an induction proof was requested, repeat Question 4.

**You should be able to:** choose a method, show the cancellation, handle a different lower limit and give an exact sum.

The lesson follows FP2.5 of the [OxfordAQA Further Mathematics 9665 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Worked examples are teaching material. Question 5 retains the AQA question and marks from the supplied textbook.

**Learning path:** [Previous: Proof by Induction](/alevel/a2-further-mathematics/proof-by-induction/) · [Back to the course](/alevel/a2-further-mathematics/) · [Next: Series and Limits](/alevel/a2-further-mathematics/series-and-limits/).
